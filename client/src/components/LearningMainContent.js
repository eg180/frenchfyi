import React from 'react'
import AccordionNav from './AccordionNav';
import {
    Route,
    Switch
} from 'react-router-dom';
import styled from 'styled-components';
import EtreAvoir from './Lessons/Chapter/1/EtreAvoir';

// import { connect } from 'react-redux'

const StyledMainContainer = styled.main`
    /* margin: 5rem 25rem 0rem 0rem; */
    border-radius: 20px;
    min-width: 70vw;
    margin: auto;
    height: 69vh;
    /* max-height: 84vh; */

    overflow: scroll;
    /* position: absolute; */
    background-color: #252422;
    color: pink;

`




export const LearningMainContent = (props) => {

    

    return (
        <StyledMainContainer>
            <EtreAvoir /> 
            <Switch>
                <Route path="/lesson/1/etreavoir" component={EtreAvoir} />       
            </Switch>
            


        </StyledMainContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}



export default LearningMainContent;

// export default connect(mapStateToProps, mapDispatchToProps)(LearningMainContent)
