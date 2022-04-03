/* eslint-disable lines-between-class-members */
import { makeAutoObservable, flow } from 'mobx'

class CharacterInfoPageStore {
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

    fetchInfo = flow(function* fetchInfoGen2(id) {
        this.loading = true
        this.id = id
        const apiUrl = `https://rickandmortyapi.com/api/character/${this.id}`
        try {
            const res = yield fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => data)
            this.loading = false
            this.name = res.name
            this.image = res.image
            this.status = res.status
            this.type = res.type
            this.species = res.species
            this.location = res.location.name
            this.origin = res.origin.name
            this.episodeCount = res.episode.length
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error, 'error in CharacterInfoPageStore')
        }
    })

    constructor(id) {
        this.id = id
        makeAutoObservable(this)
    }
}

const characterInfoPageStore = new CharacterInfoPageStore()

export default characterInfoPageStore
