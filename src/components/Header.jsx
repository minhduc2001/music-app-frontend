import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Songs } from '../Context'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import MusicItem from './MusicItem'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import User from './User'
import loading from '../public/Ripple-1s-200px.gif'

function Header({ onSetCurrentView }) {
    const { user, handleLogout, dataSong } = useContext(Songs)
    // const [isSearch, setIsSearch] = useState(false)
    const [show, setShow] = useState(false);
    const [onFocus, setOnFocus] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const searching = async () => {
    //     if (value !== '') {
    //         const data = dataSong.fiter(music => music.name.includes(value));
    //         setDataSearch(data);
    //     }

    // }

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            setDataSearch(dataSong?.filter(song => song.name.toLowerCase().includes(e.target.value)));
            setIsLoading(false);
        }
        else{
            setIsLoading(true)
        }
        // else setDataSearch([])
    }

    return (
        <Container>
            <div className="search">
                <Tippy
                    visible={onFocus}
                    interactive={true}
                    placement="bottom-start"
                    render={attrs => (

                        <div className='search-result' tabIndex="-1" {...attrs}>
                            {isLoading ?
                                (<div className='search-loading'>
                                    <h1 style={{ color: 'white' }}>Please Wait...</h1>
                                    <img src={loading} alt="loading" className="loading" />
                                </div>) :
                                (<MusicItem dataSearch={dataSearch} onFocus={setOnFocus}/>)}
                        </div>

                    )}
                >
                    <input type="text" placeholder='Tìm kiếm bài hát'
                        defaultValue=''
                        onChange={(e) => handleSearch(e)}
                        onFocus={() => setOnFocus(true)}
                        // onBlur={() => setOnFocus(false)}
                         />
                </Tippy>
            </div>
            <div className="options">
                {user ? <h2>Hi {user?.name || user?.username}!</h2> : ''}
                <ul>
                    <li className='options-li'><a href=""></a></li>
                    <li className='options-li'><a href=""></a></li>
                    <li className='options-li'><a href=""></a></li>
                    <li className='options-li'><a href=""></a></li>
                    <Tippy
                        onClickOutside={() => setShow(false)}
                        visible={show === true}
                        interactive={true}
                        placement='bottom-end'
                        render={attrs => (
                            <div className="option" tabIndex="-1" {...attrs}>
                                <User handleLogout={handleLogout} onSetCurrentView={onSetCurrentView}></User>
                            </div>
                        )}
                    >
                        <li className='options-li' onClick={() => setShow(!show)}><img src={user?.avatar?.url}></img></li>
                    </Tippy>
                </ul>
            </div>
        </Container>
    )
}
const Container = styled.div`
    position: fixed;
    width: 70%;
    display: grid;
    // justify-content: space-around;
    grid-template-columns: 45% 55%;
    min-height: 70px;
    z-index: 99;
    

    .search{
        display: flex;
        justify-content: center;
        align-items: center;
    
        input{
            width: 80%;
            height: 55%;
            padding: 10px;
            border-radius: 50px;
            border: none;
            background-color: #231B2E;
            color: #fff;
            &::placeholder {
                color: white;
            }   
        }
        .search-result{
            min-width: 480px;

            .search-loading{
                width: 100%;
                border-radius: 10px;
                max-height: 500px;
                min-height: 200px;
                padding-top: 8px;
                background-color: #453075;
                color: #fff;
                box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1{
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                .loading{
                    width: 10%;
                }
            }
        }
    }
    .options{
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            color: white;
            font-size: 15px;
            margin: 0 10px;
            cursor: default;
        }
        ul{
            list-style-type: none;
            display: flex;
            justify-content: center;
            .options-li{
                cursor: pointer;
                margin: 0 8px;
                background-color: #fff;
                width: 40px;
                height: 40px;
                border-radius: 50%;

                img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .option{
                    width: 200px;
                }
            }
        }

        
    }
`;
export default Header