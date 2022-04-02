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
    totalPages = () => Math.ceil(this.count / this.numViewable)

    fetchInfo = flow(function* fetchInfoGen(action) {
        this.loading = true
        try {
            const apiCall = `https://rickandmortyapi.com/api/character?page=${
                this.page
            }${this.search === '' ? '' : `&name=${this.search}`}${
                this.filter === 'none' ? '' : `&status=${this.filter}`
            }`

            if (action === 'search') {
                this.page = 1
                this.search = ''
            }
            console.log(action, this.search)

            const summary = yield fetch(apiCall)
                .then((response) => response.json())
                .then((data) => data)

            if (summary.error && this.page !== 1) {
                this.page = 1
                this.fetchInfo()
            }
            const res = summary.results
            this.page = Math.min(this.totalPages(), this.page)
            this.count = summary.info.count
            this.images = []
            this.names = []
            this.statuses = []
            this.origins = []
            this.ids = []
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
            console.log(error, 'hi')
        }
    })

    constructor() {
        makeAutoObservable(this)
    }
}

const mainStore = new CharacterGridStore()

export default mainStore
