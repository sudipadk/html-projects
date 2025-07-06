// let arrow = document.querySelectorAll('.circle');

// arrow.addEventListener('mouseover', (e) => {
//     circle.style.cursor = 'pointer';
// });


const myApi = 'https://api.disneyapi.dev/character';


async function disneyApiFetch() {

    console.log("Working");

    const response = await fetch(myApi);
    const data = await response.json();
    console.log(data.data);
    return data.data;
}




console.log("Working 1");

disneyApiFetch();

console.log("Working 2");


// const artists = [
//     {
//         image: "/images/arijit.webp",
//         name: 'Arijit Singh',
//         title: 'Artist'
//     },
//     {
//         image: "/images/arRahman.jpg",
//         name: 'A.R.Rahman',
//         title: 'Artist'
//     }, {
//         image: "/images/jubin.jpg",
//         name: 'Jubin Nautiyal',
//         title: 'Artist'
//     }, {
//         image: "/images/sushant.jpg",
//         name: 'Sushant K.C',
//         title: 'Artist'
//     }, {
//         image: "/images/Sajjan.jpg",
//         name: 'Sajjan Raj Vaidya',
//         title: 'Artist'
//     }, {
//         image: "/images/atif.jpg",
//         name: 'Atif Aslam',
//         title: 'Artist'
//     },
// ];

// // Generating the project cards
// let imgContainer = document.getElementById('images');
// let inHTML = '';
// artists.map((artist) => {
//     inHTML += `<div class="img-container">
//                     <div class="img" id="img">
//                         <img src="${artist.image}" alt="${artist.name}">
//                     </div>

//                     <div class="intro">
//                         <p>${artist.name}</p>
//                         <p>${artist.title}</p>
//                     </div>
//                 </div>`;
// });
// imgContainer.innerHTML = inHTML;