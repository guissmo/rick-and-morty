/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

class CharacterGridStore {
    loading = true
    search = ''
    filter = 'none'
    page = 1
    info = []
    error = ''
    fullListCount = 0
    totalPages = () => Math.ceil(this.fullListCount / 20)

    clearFilters = () => {
        this.search = ''
        this.filter = 'none'
        document.getElementById('outlined-search').value = ''
        this.pageOneAndFetch()
    }

    changeFilter = (newVal) => {
        if (this.filter === newVal) return
        this.filter = newVal
        this.pageOneAndFetch()
    }

    changePage = (newVal) => {
        if (this.page === newVal) return
        this.page = newVal
        this.fetchInfo()
    }

    searchFor = (query) => {
        if (this.search === query) return
        this.search = query
        this.pageOneAndFetch()
    }

    pageOneAndFetch = () => {
        this.page = 1
        this.fetchInfo()
    }

    getCount = () => this.info.length
    getId = (x) => this.info[x][0]
    getName = (x) => this.info[x][1]
    getImage = (x) => this.info[x][2]
    getStatus = (x) => this.info[x][3]
    getOrigin = (x) => this.info[x][4]

    fetchInfo = flow(function* fetchInfoGen() {
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

            /* NOTHING FOUND */
            if (summary.error) {
                this.error = summary.error
                this.page = 1
                this.fullListCount = 0
                this.loading = false
                return
            }

            this.error = ''
            const res = summary.results
            this.fullListCount = summary.info.count
            this.info = Array.from(Array(res.length).keys()).map((x) => {
                return [
                    res[x].id,
                    res[x].name,
                    res[x].image,
                    res[x].status,
                    res[x].origin.name,
                ]
            })
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
