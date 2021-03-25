import React from 'react';
import styled from 'styled-components';
import AccordianNav from './AccordionNav';
import LearningMainContent from './LearningMainContent';
// import { connect } from 'react-redux'

const StyledMain = styled.main`
    color: white;
    background-color: black;
    min-height: 78vh;
    max-height: 84vh;

`

export const Dashboard = (props) => {
    return (
        <StyledMain>
            <h1>Your Dashboard</h1>
            <ul>Admin Options
                <li>Create </li>
            </ul>
        
        
        </StyledMain>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Dashboard;
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
