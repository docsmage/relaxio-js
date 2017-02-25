/* Individual sounds - this is super hacky and bad, will optimize later */

var whiteNoise = new buzz.sound("/assets/sounds/white-noise.mp3", {
	preload: true,
	autoplay: false,
	loop: true
});

var cracklingFire = new buzz.sound("/assets/sounds/crackling-fire.mp3");

var rain = new buzz.sound("/assets/sounds/rain.mp3");

var oceanWaves = new buzz.sound("/assets/sounds/ocean-waves.mp3");

var thunderStorm = new buzz.sound("/assets/sounds/thunder-storm.mp3");

var singingBowl = new buzz.sound("/assets/sounds/singing-bowl.mp3");

var birdSong = new buzz.sound("/assets/sounds/bird-music.mp3");

var om = new buzz.sound("/assets/sounds/om.mp3");

var catPurr = new buzz.sound("/assets/sounds/cat-purr.mp3");

/* Array to hold a group of sounds */

var allSounds = new buzz.group([
	whiteNoise, cracklingFire, rain, oceanWaves, thunderStorm, singingBowl, birdSong, om, catPurr
]);

/* Stupid hacky method to get sounds to play */
//var whiteNoise = document.getElementById('whiteNoise');
//whiteNoise.togglePlay();