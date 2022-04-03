/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

class CharacterGridStore {
    numViewable = 20
    loading = true
    search = ''
    filter = 'none'
    page = 1
    count = 1
    images = []
    names = []
    statuses = []
    ids = []
    error = ''
    totalPages = () => Math.ceil(this.count / this.numViewable)

    clearFilters = () => {
        this.search = ''
        this.filter = 'none'
        document.getElementById('outlined-search').value = ''
        this.fetchInfo('search')
    }

    fetchInfo = flow(function* fetchInfoGen(action) {
        this.loading = true
        try {
            const apiCall = `https://rickandmortyapi.com/api/character?page=${
                this.page
            }${this.search === '' ? '' : `&name=${this.search}`}${
                this.filter === 'none' ? '' : `&status=${this.filter}`
            }`
            const summary = yield fetch(apiCall)
                .then((response) => response.json())
                .then((data) => data)

            if (summary.error && this.page === 1) {
                this.error = summary.error
                this.page = 1
                this.count = 0
                this.loading = false
                return
            }
            if (summary.error && this.page !== 1) {
                this.page = 1
                this.fetchInfo()
            }
            this.error = ''
            const res = summary.results
            this.page = Math.min(this.totalPages(), this.page)
            if (action === 'search') {
                this.page = 1
            }
            this.count = summary.info.count
            this.images = []
            this.names = []
            this.statuses = []
            this.origins = []
            this.ids = []
            /* GET RID OF THIS FOR LOOP! */
            for (
                let i = 0;
                i < Math.min(this.numViewable, res.length);
                i += 1
            ) {
                this.images.push(res[i].image)
                this.names.push(res[i].name)
                this.statuses.push(res[i].status)
                this.ids.push(res[i].id)
                this.origins.push(res[i].origin.name)
            }
            this.loading = false
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error.message)
        }
    })

    constructor() {
        makeAutoObservable(this)
    }
}

const mainStore = new CharacterGridStore()

export default mainStore
