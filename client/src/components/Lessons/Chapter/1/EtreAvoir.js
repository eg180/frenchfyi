import React from 'react'
import styled from 'styled-components';
// import { connect } from 'react-redux'

const StyledMainContainer = styled.main`
    /* margin: 5rem 25rem 0rem 0rem; */
    /* border-radius: 20px; */
    min-width: 70vw;
    margin: auto;
    min-height: 78vh;
    /* max-height: 84vh; */

    /* overflow: scroll; */
    /* position: absolute; */
    background-color: #252422;
    color: #eee4e1;
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* margin-top: 10rem; */
    }
    #chapter-title {
        font-family: 'Permanent Marker', cursive;
        margin-top: 1rem;
        margin-left: 2rem;
        font-size: 3rem;
        color: white;
    }
    #chapter-subtitle {
        font-family: 'Raleway', sans-serif;
        font-size: 1.60rem;
        margin-left: 5rem;
        color: white;
    }
    #lesson {
        margin-top: 3rem;
        margin-left: 2rem;
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;

    /* font-family: 'Anton', sans-serif; */
    /* font-family: 'Bebas Neue', cursive; */
    font-family: 'Kiwi Maru', serif;
    font-size: 1.75rem;
    /* font-family: 'Lexend', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    /* font-family: 'Raleway', sans-serif; */
    /* font-family: 'Righteous', cursive; */
    }

`

export const EtreAvoir = (props) => {
    return (
        <StyledMainContainer>
            <section id="titles">
                <h1 id="chapter-title">Être et avoir</h1>
                <h2 id="chapter-subtitle">Key Concept</h2>
            </section>
            <section id="lesson">
                <p>What you'll learn by the end of this lesson</p>
                
            </section>
   
        </StyledMainContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default EtreAvoir;

// export default connect(mapStateToProps, mapDispatchToProps)(EtreAvoir)
