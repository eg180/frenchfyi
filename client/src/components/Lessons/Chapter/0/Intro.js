import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ImageSearchRoundedIcon from '@material-ui/icons/ImageSearchRounded';
import { introData, indexOne } from "./data";
// import { connect } from 'react-redux'

const StyledMainContainer = styled.main`
    /* margin: 5rem 25rem 0rem 0rem; */
    /* border-radius: 20px; */
    min-width: 70vw;
    /* margin: auto; */
    min-height: 78vh;
    /* max-height: 84vh; */

    /* overflow: scroll; */
    /* position: absolute; */
    background-color: "black";
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
        color: black;
    }
    #chapter-subtitle {
        font-family: 'Raleway', sans-serif;
        font-size: 1.60rem;
        margin-left: 5rem;
        color: grey;
    }
    #lesson {
        line-height: 4rem;
        max-width: 75vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
            background-color: #14213d;
            /* border-radius: 20px; */
            font-size: inherit;
            font-family: inherit;
            color: #c0fdff;
            border: none;
            caret-color: #bcf4de;
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
    font-size: 2.75rem;
    /* font-family: 'Lexend', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    /* font-family: 'Raleway', sans-serif; */
    /* font-family: 'Righteous', cursive; */
    }
    #options {
        /* background-color: pink; */
    }

    #knife {
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        padding: .25rem;
    }

    #styled-tips {
        border-radius: 20px;
        line-height: 2rem;
        min-width: 5vw;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        background-color: #fefae0;
        margin-top: 3rem;
        font-size: 1rem;
        p {
            display: inline;
        }
    }


`

export const Intro = (props) => {

    let history = useHistory();

    const [chapterData, setChapterData] = useState('');
    const [wrongPath, setWrongPath] = useState(false)
    const [wrongIndexOneData, setWrongIndexOneData] = useState('');
    const [buttonAppear, setButtonAppear] = useState(false)
    const [progress, setProgress] = useState(0);
    const [notOui, setNotOui] = useState({typedWord: ''});
    const [phraseIKnow, setPhraseIKnow] = useState({typedWord: ''})
    const [lives, setLives] = useState(3)
    const [wordBank, setWordBank] = useState({});


    useEffect(() => {
        // setChapterData(introData)

        setTimeout(toggleButton, 2000);

        setChapterData(introData)
        setWrongIndexOneData(indexOne)
    }, []);


    const toggleButton = () => {
        setButtonAppear(!buttonAppear)
    };


    const advance = (e) => {
        setProgress(prevProgress => setProgress(prevProgress + 1))
    };

    const end = (e) => {
        history.push('/learn')
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (notOui.typedWord.toLowerCase() === 'oui') {
            advance()
        } else {
            setProgress(0)
            setWrongPath(true)

        } 
        
        
    }

    const inputChange = (e) => {
        e.preventDefault()
        
        setNotOui({
            ...notOui,
            [e.target.name]: e.target.value
        })
    }

    const handleSecondSubmit = (e) => {
        e.preventDefault()
        advance()
    };

    const secondInputChange = (e) => {
        e.preventDefault()
        
        setPhraseIKnow({
            ...phraseIKnow,
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
                <div>
                <p>
                {wrongPath === false
                ? chapterData[progress]
                : wrongIndexOneData[progress]
                }
                {/* in wrong path after setting phraseIKnow */}
                {((phraseIKnow && (progress === 7 || (progress === 8 && wrongPath))) || ((progress===9 && !wrongPath )|| (progress === 10 && !wrongPath))) && phraseIKnow.typedWord}
                
                </p>
                </div>


                <div id="options">
                    {(progress === 0 && buttonAppear && !wrongPath)  && <button onClick={advance}>Click me</button>}
                    {(progress === 1 && !wrongPath)  && <form autoComplete="off" onSubmit={handleSubmit}><input onChange={inputChange} maxLength="3" size="3" name="typedWord" value={notOui.word} autoFocus="true" /></form>}
                    {(progress === 2 && buttonAppear && !wrongPath)  && <button onClick={advance}>jk.</button>}

                    {(progress === 3 && buttonAppear && !wrongPath)  && <button onClick={advance}>D'accord</button>}
                    {(progress === 4 && buttonAppear && !wrongPath)  && <button onClick={advance}>Cool.</button>}
                    {(progress === 5 && buttonAppear && !wrongPath)  && <button onClick={advance}>Mouais, c'est cool.</button>}
                    {(progress === 6 && buttonAppear && !wrongPath)  && <button onClick={advance}>D'accord, ça me va.</button>}
                    {(progress === 7 && buttonAppear && !wrongPath)  && <button onClick={advance}>D'acc.</button>}
                    {(progress === 8 && !wrongPath)  && <form autoComplete="off" onSubmit={handleSecondSubmit}><input onChange={secondInputChange} maxLength="10" size="10" name="typedWord" value={phraseIKnow.word} autoFocus="true" /></form>}
                    {(progress === 9 && !wrongPath) && <button onClick={advance}>Je m'appelle {phraseIKnow.typedWord}.</button>}
                    {(progress === 10 && !wrongPath) && <button onClick={advance}>Je suis d'accord.</button>}
                    {(progress === 11 && !wrongPath) && <button onClick={advance}>Ce n'est pas juste !</button>}
                    {(progress === 12 && !wrongPath) && <button onClick={advance}>👉</button>} 
                    {(progress === 13 && !wrongPath)  && <button onClick={advance}>👉</button>}   
                    {(progress === 14 && !wrongPath)  && <button onClick={end}>→🏁</button>}                
                    {/* wrong path*/}
                    {(progress === 0 && wrongPath)  && <button onClick={advance}>D'accord</button>}
                    {(progress === 1 && wrongPath)  && <div><button onClick={advance}>Yes</button><button onClick={advance}>Non</button></div>}
                    {(progress === 2 && wrongPath)  && <button onClick={advance}>Cool</button>}
                    {(progress === 3 && wrongPath)  && <button onClick={advance}>Mouais, c'est cool.</button>}
                    {(progress === 4 && wrongPath)  && <button onClick={advance}>C'est une bonne idée !</button>}
                    {(progress === 5 && wrongPath)  && <button onClick={advance}>Ouais.</button>}                 
                    {(progress === 6 && wrongPath)  && <form autoComplete="off" onSubmit={handleSecondSubmit}><input onChange={secondInputChange} maxLength="10" size="10" name="typedWord" value={phraseIKnow.word} autoFocus="true" /></form>}
                    {(progress === 7 && wrongPath) && <button onClick={advance}>Je m'appelle {phraseIKnow.typedWord}.</button>}
                    {(progress === 8 && wrongPath)  && <button onClick={advance}>👉</button>}
                    {(progress === 9 && wrongPath)  && <button onClick={advance}>👉</button>}
                    {(progress === 10 && wrongPath)  && <button onClick={advance}>👉</button>}
                    {(progress === 11 && wrongPath)  && <button onClick={advance}>➡️</button>}
                    {(progress === 12 && wrongPath)  && <button onClick={advance}>Merci, c'est gentil !</button>}
                    {(progress === 13 && wrongPath)  && <button onClick={end}>→🏁</button>}

                </div>
                {/* images, more content, etc */}
                {(((progress === 11 && wrongPath) || (progress === 13 && !wrongPath)))
                ?
                <section>
                    <div id="styled-tips">
                        <div><ImageSearchRoundedIcon /></div>
                        <span><p>🔪 This is not pronounced like 'kuh-knife'</p></span>
                    </div>
                </section>
                :
                ""
                }                
                

                {/* tips */}
                {((progress === 7 && wrongPath) || (progress === 9 && !wrongPath))
                ?
                <div id="styled-tips">
                    <div><p>A clue might look like this!</p><ImageSearchRoundedIcon /></div>
                    <span>{`Oh yeah, je m'appelle ${phraseIKnow.typedWord} means "My name is ${phraseIKnow.typedWord}."`} Génial 👍</span>
                </div>
                :
                ""
                }

        
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
