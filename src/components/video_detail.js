import React from 'react';

const VideoDetail = ( {video} ) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
    <div className='video-detail col-md-7'>
        <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={videoUrl}></iframe>
        </div>
        <div className='details'>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    )
}

export default VideoDetail;