import React, { useState } from 'react'
import styled from 'styled-components'
import { MdLibraryMusic } from 'react-icons/md'
import { RiCompassDiscoverFill, RiChatFollowUpFill } from 'react-icons/ri'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { IoMdRadio } from 'react-icons/io'
function Navbar() {
    const [selected, setSelected] = useState(0)
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <Container>
            <div className="logo">
                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="Zingmp3" />
            </div>
            <div className="navbar-items">
                <ul>
                    <li className={`selected`} onClick={(e) => handleClick(e)}>
                        <MdLibraryMusic />
                        <p>Cá Nhân</p>
                    </li>
                    <li onClick={(e) => handleClick(e)}>
                        <RiCompassDiscoverFill />
                        <p>Khám Phá</p>
                    </li>
                    <li onClick={(e) => handleClick(e)}>
                        <AiOutlineAreaChart />
                        <p>#zingchart</p>
                    </li>
                    <li onClick={(e) => handleClick(e)}>
                        <IoMdRadio />
                        <p>Radio</p>
                    </li>
                    <li onClick={(e) => handleClick(e)}>
                        <RiChatFollowUpFill />
                        <p>Theo dõi</p>
                    </li>
                </ul>
            </div>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: content;
    
    background-color: #231B2E;
    min-height: 100vh;

    .logo{
        width: 50%;
        padding: 1rem;
        img{
            width: 100%;
        }
    }

    .navbar-items{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-left: 1rem;
        ul{
            list-style-type: none;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            li{
                display: flex;
                align-items: center;
                width: 100%;
                cursor: pointer;
                svg{
                    font-size: 20px;
                    color: white;
                }
                p{
                    color: #fff;
                    font-weight: bold;
                    font-size: 20px;
                    padding: 7px 25px;
                }
            }

            .selected{
                background-color: #7200A1;
            }
        }
    }

`;
export default Navbar