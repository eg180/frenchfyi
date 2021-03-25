import React from 'react';
import styled from 'styled-components';
import AccordianNav from './AccordionNav';
import LearningMainContent from './LearningMainContent';
// import { connect } from 'react-redux'

const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* align-items: flex-start; */
    background-color: #6d6875;
    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
    background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
    height: 70vh;
    max-height: 83vh;

`

export const LearningMain = (props) => {
    return (
        <StyledMain>
        <LearningMainContent />
        <AccordianNav />
        
        
        </StyledMain>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default LearningMain;
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
