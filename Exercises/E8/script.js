console.log('test');

// async function searchBooks() {
//     try {
//         const searchTerm = document.getElementById("searchInput").value;
//         const response = await fetch(`https://api.lyrics.ovh/v1/[{artist}/{title}]${searchTerm}`);

//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//         const data = await application.json();
//         const resultsDiv = document.getElementById("results");
//         resultsDiv.innerHTML = '';

//     }
// }


// const inputField = document.getElementById("button")

fetch(`https://api.lyrics.ovh/v1/[{artist}/{title}]${searchTerm}`);
    .then(function (application) {
    return application.json();
})
    .then(function (data) {
        console.log(data);
        data.forEach(dataPoint => {
            $(`body`).append(`
        <div>
        <h2>${dataPoint.chorus}</h2>
        </div>`)
            console.log(dataPoint);
        })
    })
    .catch(function (error) {
        // Display error message
    })