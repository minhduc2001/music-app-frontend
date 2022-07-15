import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Body from './Body'
import PersonalPage from './PersonalPage'
function Content() {

    const [currentView, setCurrentView] = useState('Body');
    return (
        <Container>
            <Header onSetCurrentView={setCurrentView} />
            {
                currentView === 'Body' ?
                    (<Body />) :
                    (<PersonalPage onSetCurrentView={setCurrentView}/>)
            }
        </Container>
    )
}
const Container = styled.div`
    background-color: #170F23;
`;
export default Content