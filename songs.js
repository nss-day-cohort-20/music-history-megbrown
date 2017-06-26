let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

let songListOutput = document.getElementById("song-list");
let listMusicLink = document.getElementById("list-music-link");
let addMusicLink = document.getElementById("add-music-link");
let addButton = document.getElementById("add-to-list");
let newSongInput = document.getElementById("song-input");
let newArtistInput = document.getElementById("artist-input");
let newAlbumInput = document.getElementById("album-input");
let listMusicPage = document.getElementById("list-music-page");
let addMusicPage = document.getElementById("add-music-page");


for (i=0; i<songs.length; i++) {
	songs[i] = songs[i].replace(/\*|@|\(|!/g, '');
	songs[i] = songs[i].replace(/>/g, "-")
}

function addInitialDom() {
	for (i=0; i<songs.length; i++) {
		songListOutput.innerHTML += `<div class="song-item">${songs[i]}</div>`;
	}
}

function songsToDom() {
	let songCard = document.createElement("div");
	songCard.setAttribute("class", "song-item");
	for (i=0; i<songs.length; i++) {
		songCard.innerHTML = songs[i];
	}
	songListOutput.appendChild(songCard);
}

function newSongToArray() {
	let newSong = newSongInput.value;
	let newArtist = newArtistInput.value;
	let newAlbum = newAlbumInput.value;
	songs.push(`${newSong} - by ${newArtist} on the album ${newAlbum}`);
}

window.addEventListener("load", function() {
	addInitialDom()
})

addButton.addEventListener("click", function() {
	newSongToArray();
	songsToDom();
})

addMusicLink.addEventListener("click", function() {
	addMusicPage.classList.remove("hidden");
	listMusicPage.classList.add("hidden");
})

listMusicLink.addEventListener("click", function() {
	listMusicPage.classList.remove("hidden");
	addMusicPage.classList.add("hidden");
})


















