import React, { useState, useRef, useContext } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { Songs } from '../Context'
import { Box} from '@mui/material';
function Musics() {
    const { dataSong, handleSetSong, song } = useContext(Songs);
    const [active, setActive] = useState('playlists');
    const [idSong, setIdSong] = useState(0);
    // console.log('haha',idSong);
    
    useEffect(()=>{
        setIdSong(song?.id)
    },[song])
    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    }

    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [idSong])
    return (
        <Container>
            <div className="header">
                <div className="option">
                    <div
                        onClick={() => setActive('playlists')}
                        className={`playlists ${active === 'playlists' ? 'active' : ''}`}
                    >
                        <h6>Danh sách phát</h6>
                    </div>

                    <div
                        onClick={() => setActive('recently')}
                        className={`recently ${active === 'recently' ? 'active' : ''}`}
                    >
                        <h6>Nghe gần đây</h6>
                    </div>
                </div>

            </div>
            <Box className="list-musics">
                {dataSong?.map((music, index) => {
                    return (<div
                        // ref={scrollRef}
                        key={index}
                        className={`music-item ${idSong === music?.id ? 'selected' : ''}`}

                    >
                        <div
                            className="music-image"
                            onClick={() => {handlePlaySong(music?.id) }}
                        >
                            <img src={music?.image} alt="" />
                        </div>
                        <div className="music-info">
                            <h2>{music?.name}</h2>
                            <p>{music?.author}</p>
                        </div>
                    </div>)
                })}
            </Box>
        </Container>
    )
}
const Container = styled.div`
    background-color: #170F23;
    border-left: 0.2px solid #2F2739;
    // overflow: auto;
    .header {
        background-color: #170F23;
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: transparent;
        z-index: 99;
        display: flex;
        align-items: center;
        // justify-content: center;

        .option{
            position: relative;
            width: 240px;
            height: 34px;
            background-color: #231B2E;
            border-radius: 40px;
            display: flex;
            align-items: center;
            margin-left: 70px;
            
            .playlists{
                position: absolute;
                width: 49%;
                height: 95%;
                background-color: transparent;
                border-radius: 40px;
                left: 1px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                cursor: pointer;
                h6{
                    font-size: 14px;
                    font-weight: 350;
                }
            }
            .recently{
                position: absolute;
                width: 49%;
                height: 95%;
                background-color: transparent;
                border-radius: 40px;
                right: 1px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                cursor: pointer;

                h6{
                    font-size: 14px;
                    font-weight: 350;
                }
            }

            .active {
                background-color: #170F23;
            }
        }
    }
    .list-musics{
        overflow: auto;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        margin-top: 75px;
        width: 100%;
        height: 750px;
        &::-webkit-scrollbar{
            width: 0.2rem;
            &-thumb{
                background-color: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }

        .music-item{
            display: flex;
            align-items: center;
            width: 92%;
            height: 60px;
            background-color: transparent;
            margin: 0 10px;
            border-radius: 8px;
            cursor: pointer;

            &:hover{
                background-color: #2A2139;
            }

            .music-image{
                width: 40px;
                height: 40px;
                background-color: pink;
                margin: 5px 10px;
                border-radius: 8px;

                img{
                    width:100%;
                    height: 100%;
                }
            }
            .music-info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                h2{
                    font-size: 15px;
                    color: white;
                }
                p{
                    font-size: 12px;
                    color: white;
                    font-weight: 100;
                }
            }

        }

        .selected{
            background-color: #7200A1;
            &:hover{
                background-color: #7200A1 !important;
            }
        }
    }
    
`;
export default Musics