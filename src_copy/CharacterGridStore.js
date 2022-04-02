/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

class CharacterGridStore {
    numViewable = 20
    loading = true
    search = ''
    filter = ''
    page = 1
    count = 1
    images = []
    names = []
    statuses = []
    ids = []
    totalPages = () => Math.ceil(this.count / this.numViewable)

    fetchInfo = flow(function* fetchInfoGen() {
        this.loading = true
        try {
            const apiCall = `https://rickandmortyapi.com/api/character?page=${
                this.page
            }${this.search === '' ? '' : `&name=${this.search}`}${
                this.filter === '' ? '' : `&status=${this.filter}`
            }`
            // BUG ABOUT SEARCH
            const summary = yield fetch(apiCall)
                .then((response) => response.json())
                .then((data) => data)
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
            console.log('hi')
        }
    })

    constructor() {
        makeAutoObservable(this)
    }
}

const mainStore = new CharacterGridStore()

export default mainStore
