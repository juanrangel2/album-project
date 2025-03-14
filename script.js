let album1 ={
    image: "ivan.webp",
    artist: "Ivan Cornejo",
    album: "Mirada",
    release: "2024"
}

let album2 ={
    image: "peep.webp",
    artist: "Lil Peep",
    album: "Hellboy",
    release: "2016"
}

let albums = [album1, album2];

let url = document.querySelector(".url");
let artist = document.querySelector(".artist");
let album = document.querySelector(".album");
let year = document.querySelector(".year");
let display = document.querySelector(".display");


add.onclick = function(){
let urlInput = url.value;
let artistInput = artist.value;
let albumInput = album.value;
let yearInput = year.value;

let newAlbum = {
    image: urlInput,
    artist: artistInput,
    album: albumInput,
    release: yearInput
}
 albums.push(newAlbum);

 display.insertAdjacentHTML("beforeend", albums[0]);
forEach(album){
`<img src = urlInput> <p> artistInput </p> <p> albumInput </p> <p> yearInput </p>`
}
};