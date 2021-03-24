import React from 'react'
import styled from 'styled-components';
// import { connect } from 'react-redux'

const StyledMainContainer = styled.main`
    /* margin: 5rem 25rem 0rem 0rem; */
    border-radius: 20px;
    min-width: 90vw;
    margin: auto;
    height: 69vh;
    max-height: 84vh;

    overflow: visible;
    /* position: absolute; */
    background-color: #252422;
    color: pink;
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* margin-top: 10rem; */
    }
    #chapter-title {
        margin-top: 1rem;
        margin-left: 2rem;
        font-size: 3rem;
        color: white;
    }
    #chapter-subtitle {
        font-size: 1.60rem;
        margin-left: 5rem;
        color: white;
    }
    #lesson {
        margin-top: 3rem;
    }
`




export const LearningMainContent = (props) => {


    return (
        <StyledMainContainer>
            <section id="titles">
                <h1 id="chapter-title">Être et avoir</h1>
                <h2 id="chapter-subtitle">Key Concept</h2>
            </section>
            <section id="lesson">
                <p>To have, and to be. That is the question.</p>
            </section>
        </StyledMainContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default LearningMainContent;

// export default connect(mapStateToProps, mapDispatchToProps)(LearningMainContent)
