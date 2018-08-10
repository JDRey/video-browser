import React from 'react';

const VideoListItem = ({ listItem }) => {
    // const item = props.listItem.snippet;

    return (
        <li className='list-group-item'>
            <div className='media-left'>
                <img src={listItem.snippet.thumbnails.default.url}
                    alt={listItem.snippet.title} />
            </div>
            <div className='media-body'>
                <div className='media-heading'>
                    <strong>{listItem.snippet.title}</strong>
                </div>
                {listItem.snippet.channelTitle}
                {/* TODO: add viewCount to video list thumbnails
                            <div>
                                {listItem.statistics.viewCount}
                            </div> */}
            </div>
        </li>
    );
};

export default VideoListItem;