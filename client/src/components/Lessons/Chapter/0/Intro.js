import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import introData from "./data";
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
    background-color: ${(introData[3] !== 3) ? "white" : "black"};
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
        input {
            font-size: inherit;
            font-family: inherit;
            color: pink;
            border: none;
            :focus {
                outline: none;
            }
        }
        button {
            margin-top: 2rem;
            background-color: inherit;
            color: inherit;
            font-size: 100%;
            font-family: inherit;
            border: 1;
            border-color: #bcf4de;
            padding: 0;
            :hover {
                cursor: pointer;
            }
        }
        .hidden-button {
            background-color: inherit;
            color: inherit;
            font-size: 100%;
            font-family: inherit;
            border: 0;
            padding: 0;
            :hover {
                cursor: pointer;
            }
        }
        blockquote {
            margin: 2rem 2rem;
        }
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

export const Intro = (props) => {

    const [chapterData, setChapterData] = useState('');
    const [buttonAppear, setButtonAppear] = useState(false)
    const [progress, setProgress] = useState(0);
    const [notOui, setNotOui] = useState({typedWord: ''});
    const [lives, setLives] = useState(3)
    const [wordBank, setWordBank] = useState({});


    useEffect(() => {
        // setChapterData(introData)

        setTimeout(toggleButton, 2000);

        setChapterData(introData)
    }, []);


    const toggleButton = () => {
        setButtonAppear(!buttonAppear)
    };


    const handleClick = (e) => {
        console.log(e.target.value)
        
    }

    const advance = (e, prevProgress) => {
        console.log('advancing', progress)
        setProgress(prevProgress => setProgress(prevProgress + 1))
        if (prevProgress + 1 === 2) {
            // setNotOui(e.target.value)
            console.log(e.target.value)
        }
    };
    const inputChange = (e) => {
        e.preventDefault()
        
        setNotOui({
            ...notOui,
            [e.target.name]: e.target.value
        })
    }
    


    return (
        <StyledMainContainer>
            <section id="titles">
                <h1 id="chapter-title">Intro</h1>
                <h2 id="chapter-subtitle">Key Concepts</h2>
            </section>
            <section id="lesson">
                <blockquote>
                <p>
                {chapterData[progress]}
                {chapterData[progress] === 4 && notOui.typedWord}
                </p>

                {progress}
                {(progress === 0 && buttonAppear)  && <button onClick={advance}>D'accord</button>}
                {(progress === 1 && buttonAppear)  && <button onClick={advance}>D'accord</button>}
                {(progress === 2)  && <form onSubmit={advance}><input onChange={inputChange} maxLength="3" size="3" name="typedWord" value={notOui.word} autoFocus="true"/></form>}
                {(progress === 3 && buttonAppear)  && <button onClick={advance}>D'accord</button>}





                </blockquote>


                
                
            </section>
   
        </StyledMainContainer>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default Intro;

// export default connect(mapStateToProps, mapDispatchToProps)(EtreAvoir)
