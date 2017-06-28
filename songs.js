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

function songToDom(songs) {
	songs.forEach( function(currentSong) {
		let songEl = document.createElement("section");
		songEl.setAttribute("class", "song");
		songEl.innerHTML = `<h2>${currentSong.name}</h2>
											  <ul>
											  <li>${currentSong.artist}</li>
											  <li>${currentSong.album}</li>
											  </ul>`
		songListOutput.appendChild(songEl);
		deleteBtnToSong(songEl);
	});
}

function deleteBtnToSong(songEl) {
	let deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("class", "delete");
	deleteBtn.innerHTML = "Delete";
	songEl.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", function(){
		songListOutput.removeChild(songEl);
	})
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

loadSongs1(songToDom);
loadSongs2(songToDom);