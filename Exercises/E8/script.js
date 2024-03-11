console.log("connected");
//let plant = {
// "description": "Easy to take care of houseplant",
// "photo": "rubberplant.jpg",
// "name": "Rubber Plant",

//$('body').append(`<p>${plant.name}`)


//let plants = [
// {
//     "description": "Easy to take care of houseplant",
//      "photo": "rubberplant.jpg",
//      "name": "Rubber Plant",
//   },
//   {
//       "description": "Easy to take care of houseplant",
//       "photo": "rubberplant.jpg",
//       "name": "Rubber Plant",
//   },
//   {
//       "description": "Easy to take care of houseplant",
//       "photo": "rubberplant.jpg",
//       "name": "Rubber Plant",
//   },
//]

//for (let i = 0; i < plants.length; i++) {
//    $('body').append(`
//    <div>
//        <h2>${plant[i].description}</h2>
//        <img 
//        <p>${plant[i].name}</p>
//    </div>;
//    `)
//}

//fetch("plants.json")
// .then(function (response) {
//      return response.json();
//   })
//
//   .then(function (data) {
//       for (let i = 0; i < data.plants.length; i++) {
//           $('body').append(`
// <div>
//       <h2>${data.plants[i].description}</h2>
//        <img 
//       <p>${data.plants[i].name}</p>
//    </div>;
//   `)
//       }
////    })

///   .catch (function (error) {
//    $(`body`).append('')
//})


fetch("https://ghibliapi.vercel.app/species")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        data.forEach(dataPoint => {
            $(`body`).append(`
            <div>
            <h2>${dataPoint.name}</h2>
            <p>${dataPoint.eye_colors}</p>
            </div>`)
            console.log(dataPoint);
        })
    })
    .catch(function (error) {
        // Display error message
    })