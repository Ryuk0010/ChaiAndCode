let videos = [];

document.addEventListener('DOMContentLoaded', fetchVideos);

function filterVideos() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredVideos = videos.filter(video => 
        video.items.snippet.title.toLowerCase().includes(searchTerm)
    );
    displayVideos(filteredVideos);
}

async function fetchVideos() {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos');
        const data = await response.json();
        
        videos = data.data.data;
        console.log(videos)
        displayVideos(videos);
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

function displayVideos(videos) {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img class="video-thumbnail" src="${video.items.snippet.thumbnails.medium.url}">
            <div class="video-info">
                <h2 class="video-title">${video.items.snippet.title}</h2>
                <p class="video-channel">${video.items.snippet.channelTitle}</p>
            </div>
        `;
        videoCard.addEventListener('click', () => {
            window.open(`https://www.youtube.com/watch?v=${video.items.id}`, '_blank');
        });
        videoList.appendChild(videoCard);
    });
}

