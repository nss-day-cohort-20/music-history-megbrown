let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Go Your Own Way > by Fleetwood Mac on the album Rumors");
songs.unshift("Jeepster > by T.Rex on the album Electric Warrior");

for (i=0; i<songs.length; i++) {
	songs[i] = songs[i].replace(/\*|@|\(|!/g, '');
	songs[i] = songs[i].replace(/>/g, "-")
}

for (i=0; i<songs.length; i++) {
	let songList = document.getElementById("song-list");
	songList.innerHTML += `<h3>${songs[i]}<h3>`;
}

let listMusicPage = document.getElementById("list-music-page");
let addMusicPage = document.getElementById("add-music-page");

let listMusicLink = document.getElementById("list-music-link");
let addMusicLink = document.getElementById("add-music-link");


addMusicLink.addEventListener("click", function() {
	addMusicPage.classList.remove("hidden");
	listMusicPage.classList.add("hidden");
})

listMusicLink.addEventListener("click", function() {
	listMusicPage.classList.remove("hidden");
	addMusicPage.classList.add("hidden");
})


















