import React, { useContext } from 'react'
import styled from 'styled-components'
import { Songs } from '../Context'
function MusicItem({ dataSearch, onFocus}) {
    const { handleSetSong } = useContext(Songs)
    return (
        <Container>

            {dataSearch?.map((music, index) => (
                <div
                    key={index}
                    className={`music-item`}
                    onClick={() => { handleSetSong(music?.id); onFocus(false) }}
                >
                    <div
                        className="music-image"
                    >
                        <img src={music?.image} alt="" />
                    </div>
                    <div className="music-info">
                        <h2>{music?.name}</h2>
                        <p>{music?.author}</p>
                    </div>
                </div>
            ))
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    max-height: 500px;
    min-height: 100px;
    padding-top: 8px;
    background-color: #453075;
    color: #fff;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
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
        width: 100%;
        padding: 5px;

        &:hover{
            cursor: pointer;
            background-color: #ffffff39;
        }
        .music-image{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin: 0 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

`;

export default MusicItem