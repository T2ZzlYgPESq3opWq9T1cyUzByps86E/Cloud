document.addEventListener('DOMContentLoaded', () => {
	const videoContainer = document.querySelector('.video');

	const video = document.createElement('video');
	video.id = 'player';
	video.controls = true;
	video.poster = posterSrc;

	const source = document.createElement('source');
	source.src = videoSrc;
	source.type = 'application/x-mpegURL';

	video.appendChild(source);
	videoContainer.appendChild(video);

	const player = new Plyr('#player', {
		controls: [
			'play-large', 'play', 'progress', 'current-time',
			'mute', 'volume', 'settings', 'fullscreen',
		],
		settings: ['quality', 'speed'],
		ratio: '16:9',
		autoplay: true,
		muted: false,
	});

	if (Hls.isSupported()) {
		const hls = new Hls();
		hls.loadSource(videoSrc);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED, () => {
			player.play();
		});
	} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.src = videoSrc;
		video.addEventListener('loadedmetadata', () => {
			player.play();
		});
	}
});

document.addEventListener("DOMContentLoaded", function() {
	function createPost(data) {
		const container = document.querySelector(".videoInformation");


		let imageGallery = `<div class='psImg grImg'>`;
		data.Images.forEach(img => {
			imageGallery += `<img alt='${data.ImageAlt}' src='${img}'/>`;
		});
		imageGallery += `</div>`;


		container.innerHTML = `
                <p>${data.Description}</p>
                    <div class='pInfo pPad'>
                        <div class='L'><small>Director</small><span>${data.Director}</span></div>
                        <div class='R'><small>Writers</small><span>${data.Writers}</span></div>
                    </div>

                    <div class='pInfo pPad'>
                        <div class='L'><small>Stars</small><span>${data.Stars}</span></div>
                        <div class='R'><small>Genres</small><span>${data.Genres}</span></div>
                    </div>

                    <div class='pInfo pPad'>
                        <div class='L'><small>Country</small><span>${data.Country}</span></div>
                        <div class='R'><small>Language</small><span>${data.Language}</span></div>
                    </div>

                    <div class='pInfo pPad'>
                        <div class='L'><small>Year</small><span>${data.Year}</span></div>
                        <div class='R'><small>Company</small><span>${data.Company}</span></div>
                    </div>

                    <div class='pInfo pPad'>
                        <div class='L'><small>Runtime</small><span>${data.Runtime}</span></div>
                        <div class='R'><small>Copyright</small><span>${data.Copyright}</span></div>
                    </div>
                    <h6>Stills</h6>
                    ${imageGallery}
                `;
	}

	createPost(videoData);
});
