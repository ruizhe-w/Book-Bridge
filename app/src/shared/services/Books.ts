const getAllBooksNearby = (userId: string, geoX: number, geoY: number) => {
    console.log(`trying to get all books nearby`);

    return fetch("https://ppt666.com/v1/books/getAllBooksNearby", {
        method: "post",
        body: `{"userId": "${userId}", "geoX": ${geoX}, "geoY": ${geoY}}`
    })
        .then(response => response.json());
};