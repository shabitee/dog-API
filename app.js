let dataBox = document.querySelector("#dogImages");

let dog = (event) => {

const keyAPI = `https://dog.ceo/api/breeds/image/random`;

    fetch(keyAPI)

    .then((response) => response.json())

    .then((data) =>{

        console.log(data.data);

        dataBox.innerHTML = `<img src="${data.message}">`;

        })

    .catch((err) => console.error(err));

event.preventDefault();

}

document.querySelector("#btn").addEventListener("click", dog)


let databox2 = document.querySelector("#facts");

fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=5')

    .then((response) => {

    response.json().then((data) => {

        console.log(data)

        myJSON = JSON.stringify(data)
        
        databox2.innerHTML = `<p>${data[0].fact}<p>`
        console.log(data)

    })

})

    //let facts = document.querySelector()
