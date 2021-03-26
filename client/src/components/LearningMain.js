import React from 'react'
import styled from 'styled-components';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';

// import { connect } from 'react-redux'

const StyledMainContainer = styled.main`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    
    /* margin: 5rem 25rem 0rem 0rem; */
    border-radius: 20px;
    min-width: 70vw;
    margin: auto;
    height: 80vh;
    overflow: scroll;
    /* max-height: 84vh; */

    overflow: scroll;
    /* position: absolute; */
    background-color: #252422;
    color: black;
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

    /* font-family: 'Anton', sans-serif; */
    /* font-family: 'Bebas Neue', cursive; */
    font-family: 'Kiwi Maru', serif;
    /* font-family: 'Lexend', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    /* font-family: 'Raleway', sans-serif; */
    /* font-family: 'Righteous', cursive; */
    }
`

const StyledJourneySection = styled.section`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    .card {
        margin-top: 2rem;
        border-radius: 20px;
        background-color: purple;
        min-width: 25vw;
        min-height: 20vh;
        max-width: 25vw;
        max-height: 20vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .top {
            img {
                padding-top: .25rem; 
                object-fit: contain;
                width: 95%;
                height: 95%;
                /* height: auto;
                width: auto; */
                /* max-width: 100%; */
                /* overflow: hidden; */
            }
            background-color: #c8b6ff;
            min-height: 70%;
            min-width: 100%;
        }
        .bottom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* min-height: 5rem; */
            background-color: #fef9ef;
            min-height: 30%;
            min-width: 100%;
        }

    }
`

export const EtreAvoir = (props) => {
    return (
        <StyledMainContainer>
            <StyledJourneySection className="journey">
                
                <ExploreSharpIcon />

                <div className="card">
                    <div className="top"><img alt="starting line" src="/images/arcade.png" /> </div>
                    <div className="bottom"><span>Intro</span><p>Solved Tasks: 1 ✅</p></div>
                </div>

                <div className="card">
                    <div className="top"><img alt="starting line" src="/images/start.png" /> </div>
                    <div className="bottom"><span>Intro</span><p>Solved Tasks: 0</p></div>
                </div>

                





            </StyledJourneySection>

        </StyledMainContainer>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default EtreAvoir;

// export default connect(mapStateToProps, mapDispatchToProps)(EtreAvoir)
