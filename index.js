const video = document.getElementById('video');
const videoMuteBtn = document.querySelector('.video-btn_mute');
const videoProgress = document.querySelector('.progress1');

function muteResize() {
    if (!videoMuteBtn.classList.contains('video-btn_mute-big')) {
        videoMuteBtn.classList.add('video-btn_mute-big');
    } else {
        videoMuteBtn.classList.remove('video-btn_mute-big');
    };
};

setInterval(muteResize, 500);

videoMuteBtn.addEventListener('click', () => {
    video.muted = false;
    videoMuteBtn.classList.add('video-btn_mute-none');
})

let width = 1;

function videoTimeProgress() {
    if (width === 178) {
        clearInterval(videoLoad);
        return;
    } else if (width <= 70 ) {
        width += 4;
        videoProgress.style.width = `${width}px`;
    } else if (70 < width) {
        width = width + 0.5;
        videoProgress.style.width = `${width}px`;
    }
};

let videoLoad = setInterval(videoTimeProgress, 500);