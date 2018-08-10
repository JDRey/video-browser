import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((listItem) => {
        return <VideoListItem key={listItem.etag} listItem={listItem} />
    });

    return (
        <ul style={{ float: 'right' }} className='col-md-5 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList;