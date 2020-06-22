class ServerApi {
    baseURL = "https://swapi.dev/api"
    imageBaseURL = "https://starwars-visualguide.com/assets/img/"

    getData = (url) => {
        return fetch(`${this.baseURL}${url}`)
            .then((response) => {
                // console.log()
                if (!response.ok) return null
                else return response.json()
            })
            .catch(err => {
                if (err) return null
            })
    }

    getCharactersList = (pageNumber) => {
        return this.getData(`/people/?page=${pageNumber}`)
    }

    getCharacter = (characterId) => {
        return this.getData(`/people/${characterId}/`)
    }

    getFilmsList = (pageNumber) => {
        return this.getData(`/films/?page=${pageNumber}`)
    }

    getFilm = (filmId) => {
        return this.getData(`/films/${filmId}/`)
    }

    getPlanetsList = (pageNumber) => {
        return this.getData(`/planets/?page=${pageNumber}`)
    }

    getPlanet = (planetId) => {
        return this.getData(`/planets/${planetId}/`)
    }

    getIdFromURL = (url) => {
        // console.log(url)
        const {0: id} = url.match(/\d+/)
        return id
    }

    getCharImage = (id) => {
        return `${this.imageBaseURL}/characters/${id}.jpg`
    }

    getPlanetImage = (id) => {
        return `${this.imageBaseURL}/planets/${id}.jpg`

    }

    getFilmImage = (id) => {
        return `${this.imageBaseURL}/films/${id}.jpg`
    }

    getFact = () => {
       return fetch("./facts.json")
    }

}
export default ServerApi

// fetch(`https://swapi.dev/api/people/?page=${this.props.pageNumber}`)
//     .then(response => response.text())
//     .then(data => this.setState({data : JSON.parse(data)}))
//
// fetch(`https://swapi.dev/api/people/${this.props.id}/`)
//     .then(response => response.text())
//     .then(response => {
//         const data = JSON.parse(response)
//         console.log(data)
//         this.setState({data})
//     })