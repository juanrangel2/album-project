let album1 = {
    image: "ivan.webp",
    artist: "Ivan Cornejo",
    album: "Mirada",
    release: "2024"
}

let album2 = {
    image: "peep.webp",
    artist: "Lil Peep",
    album: "Hellboy",
    release: "2016"
}
let albums = [album1, album2];

let url = document.querySelector(".url");
let artist = document.querySelector(".artist");
let albume = document.querySelector(".albume");
let year = document.querySelector(".year");
let add = document.querySelector(".add");
let display = document.querySelector(".display"); 

function displayAlbum(album) {
    let albumThing = `<div class="album">
            <img src="${album.image}">
            <h3>${album.album}</h3>
            <p>Artist: ${album.artist}</p>
            <p>Release Year: ${album.release}</p>
        </div>`;
    display.insertAdjacentHTML("beforeend", albumThing); 
}

albums.forEach(album => {
    displayAlbum(album);
}); 

add.addEventListener('click', () => {
    let newAlbum = {
        image: url.value,
        artist: artist.value,
        album: albume.value,
        release: year.value
    };

    albums.push(newAlbum);

    url.value = "";
    artist.value = "";
    albume.value = "";
    year.value = "";

    display.innerHTML = "";
    albums.forEach(album => {
        displayAlbum(album);
    });
});
