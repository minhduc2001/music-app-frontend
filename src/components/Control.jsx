import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context'
function Control() {
    const { dataSong, handleSetSong, song } = useContext(Songs)
    const handleClickPrevious = () => {
        handleSetSong(song.id === 0 ? dataSong[dataSong.length - 1].id : song.id - 1)
    }
    const handleClickNext = () => {
        handleSetSong(song.id === dataSong[dataSong.length - 1].id ? 0 : song.id + 1)
    }

    const handleEnded = () => {
        handleSetSong(song.id === dataSong[dataSong.length - 1].id ? 0 : song.id + 1)
    }
    useEffect(() => {
        console.log('re-render');
    },[song])
    return (

        <Container>
            <div className="music">
                <div className="music-image" style={song ? {} : { backgroundColor: 'transparent' }}>
                    <img src={song?.image} alt="" />
                </div>
                <div className="music-info">
                    <h2>{song ? song.name : 'Chon bai hat !'}</h2>
                    <p>{song?.author}</p>
                </div>
            </div>
            <div className="main-control">
                <AudioPlayer
                    className='player'
                    // autoPlay
                    src={song?.url}
                    // onPlay={e => console.log("onPlay")}
                    showSkipControls={true}
                    showJumpControls={true}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    onEnded={handleEnded}
                />

            </div>
            <div className="sub-monitor">

            </div>
        </Container>
    )
}
const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;
    background-color: #120C1C;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    .music{
        display: flex;
        align-items: center;
        .music-image{
            width: 50px;
            height: 50px;
            background-color: pink;
            margin: 0 20px;

            img{
                width: 100%;
            }
        }
        .music-info{
            color: white;
            cursor: default;
        }
    }
    .main-control{
        .player{
            background-color: transparent !important;

            .rhap_time, .rhap_current-time, svg{
                color: #fff !important;
            }
            .rhap_volume-bar{
                background: #595560 !important;
            }
            .rhap_volume-indicator, .rhap_progress-indicator{
                background: #fff !important;
            }
            
        }
    }
`;
export default Control