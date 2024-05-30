export interface IEpisodes {
    "id": number,
    "title": string,
    "description": string,
    "number": string,
    "chapter": string,
    "release_date": string,
    "arc": {
        "id": number,
        "title": string,
        "description": string,
        "saga": {
            "id": number,
            "title": string,
            "saga_number": string,
            "saga_chapitre": string,
            "saga_volume": string,
            "saga_episode": string
        }
    },
    "saga": {
        "id": number,
        "title": string,
        "saga_number": string,
        "saga_chapitre": string,
        "saga_volume": string,
        "saga_episode": string
    }
}



