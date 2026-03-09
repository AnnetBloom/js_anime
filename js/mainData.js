const mainData = () => {
    fetch('https://test-b263e-default-rtdb.firebaseio.com/anime.json')
    //fetch('./db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.anime);
        })
}

mainData()