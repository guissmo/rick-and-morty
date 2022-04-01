/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

export default class CharacterGridStore {
    loading = true
    search = ''
    filterAlive = false
    filterDead = false
    filterUnknown = false
    page = 1
    images = []
    names = []
    statuses = []
    ids = []

    fetchInfo = flow(function* fetchInfoGen() {
        this.loading = true
        try {
            const res = yield fetch(
                `https://rickandmortyapi.com/api/character?page=${this.page}`
            )
                .then((response) => response.json())
                .then((data) => data)
            this.images = []
            this.names = []
            this.statuses = []
            this.ids = []
            for (let i = 0; i < 4; i += 1) {
                this.images.push(res[i].image)
                this.names.push(res[i].name)
                this.statuses.push(res[i].status)
                this.ids.push(res[i].id)
            }
        } catch (error) {
            console.log('error in CharacterGridStore')
        }
    })

    constructor() {
        makeAutoObservable(this)
    }
}
