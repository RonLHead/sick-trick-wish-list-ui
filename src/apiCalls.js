const fetchTricks = {
    getTrickData(url) {
        return fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Unable to retrieve data")
                } else {
                    return response.json()
                }
            });
    }
}

export default fetchTricks;