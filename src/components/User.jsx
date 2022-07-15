import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function User({ handleLogout, onSetCurrentView }) {

    
    return (
        <Container>
            <ul>
                <li onClick={() => onSetCurrentView('PersonalPage')}>Trang Ca Nhan</li>
                <li><Link to="#" />Mua VIP</li>
                <li onClick={() => { handleLogout() }}>Dang xuat</li>
            </ul>
        </Container>
    )
}
const Container = styled.div`
    background-color: #453075;
    width: 200px;
    border-radius: 6px;
    ul{
        // width: 100%;
        display: flex;
        flex-direction: column;

        align-items: center;
        li{
            display: flex;
            justify-content:center;
            cursor: pointer;
            color: #fff;
            width: 100%;
            padding: 10px 0;
            border-radius: 6px;
            &:hover{
                
                background-color: #7647A1;
            }
        }
    }
`
export default User