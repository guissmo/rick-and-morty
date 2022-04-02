/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

export default class CharacterInfoPageStore {
    id
    loading = true
    name = ''
    image = ''
    status = ''
    type = ''
    species = ''
    location = ''
    origin = ''
    episodeCount = 0

    fetchInfo = flow(function* fetchInfoGen() {
        this.loading = true
        try {
            const res = yield fetch(
                `https://rickandmortyapi.com/api/character/${this.id}`
            )
                .then((response) => response.json())
                .then((data) => data)
            this.name = res.name
            this.image = res.image
            this.status = res.status
            this.type = res.type
            this.species = res.species
            this.location = res.location.name
            this.origin = res.origin.name
            this.episodeCount = res.episode.length
            this.loading = false
        } catch (error) {
            console.log('error in CharacterInfoPageStore')
        }
    })

    constructor(id) {
        this.id = id
        makeAutoObservable(this)
    }
}
