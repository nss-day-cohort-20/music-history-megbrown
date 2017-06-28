let songs = [];
let songListOutput = document.getElementById("song-list");
let listMusicLink = document.getElementById("list-music-link");
let addMusicLink = document.getElementById("add-music-link");
let addButton = document.getElementById("add-to-list");
let newSongInput = document.getElementById("song-input");
let newArtistInput = document.getElementById("artist-input");
let newAlbumInput = document.getElementById("album-input");
let listMusicPage = document.getElementById("list-music-page");
let addMusicPage = document.getElementById("add-music-page");

function newSongToArray() {
	let newSong = newSongInput.value;
	let newArtist = newArtistInput.value;
	let newAlbum = newAlbumInput.value;
	songs.push(`<h2>${newSong}</h2>
							 <ul>
							 <li>${newArtist}</li>
							 <li>${newAlbum}</li>
							 </ul>`)
}


addButton.addEventListener("click", function() {
	newSongToArray();
	console.log(songs)
})

addMusicLink.addEventListener("click", function() {
	addMusicPage.classList.remove("hidden");
	listMusicPage.classList.add("hidden");
})

listMusicLink.addEventListener("click", function() {
	listMusicPage.classList.remove("hidden");
	addMusicPage.classList.add("hidden");
})

function songs1ToDom(songs1Arr) {
	songs.forEach( function(currentSong) {
		songListOutput.innerHTML += `<h2>${currentSong.name}</h2>
																 <ul>
																 <li>${currentSong.artist}</li>
																 <li>${currentSong.album}</li>
																 </ul>`
	});
}
function songs2ToDom(songs2Arr) {
	songs.forEach( function(currentSong) {
		songListOutput.innerHTML += `<h2>${currentSong.name}</h2>
																 <ul>
																 <li>${currentSong.artist}</li>
																 <li>${currentSong.album}</li>
																 </ul>`
	});
}

function loadSongs1(callback) {
	let load = new XMLHttpRequest();
	load.addEventListener("load", function() {
		songs = JSON.parse(this.responseText).songs1;
		callback(songs)

	})
	load.open("GET", "data/songs1.json");
	load.send();
}

function loadSongs2(callback) {
	let load = new XMLHttpRequest();
	load.addEventListener("load", function() {
		songs = JSON.parse(this.responseText).songs2;
		callback(songs)

	})
	load.open("GET", "data/songs2.json");
	load.send();
}

loadSongs1(songs1ToDom);
loadSongs2(songs2ToDom);