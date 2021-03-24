import React, { useEffect } from 'react'
// import lax from "lax.js";
import styled from 'styled-components';


// import { connect } from 'react-redux'



const StyledMain = styled.main`
    .outer {
        opacity: 0.7;
    }
    height:40vh;
    background-size:cover;
    background-repeat:no-repeat;
    font-family: 'Lexend', sans-serif;
    color: white;
    position: relative;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    /* .montmarte-eg {
        filter: blur(.10rem);
        border-radius: 10px;
        position: fixed;
        z-index: -1;
        opacity: .55;
        bottom: 0;
        right: 0;
        background-image:url('/images/montmartre-eg.jpg');
        background-size:cover;
        background-repeat:no-repeat;
        min-height: 40vw;
        min-width: 40vw;
    } */
    .la-tour-eiffel {
        filter: blur(.18rem);
        border-radius: 10px;
        position: absolute;
        z-index: 0;
        opacity: .55;
        background-image:url('/images/france.jpg');
        background-size:cover;
        background-repeat:no-repeat;
        min-height: 40vw;
        min-width: 40vw;
    }
    .champs {
        filter: blur(.01rem);
        border-radius: 10px;
        position: fixed;

        z-index: 1;
        opacity: .55;
        bottom: 0;
        right: 0;
        background-image:url('/images/champs.jpg');
        background-size:cover;
        background-repeat:no-repeat;
        min-height: 40vw;
        min-width: 40vw;
        margin-bottom: 3rem;
    }    
    
    /* background-color: #7400b8; */
    max-height: 78vh;
    min-height: 78vh;
`

const HeroSection = styled.section`
    div {
        /* background-color: red; */
        max-width: 15vw;
    }
    filter: blur(0rem);
    /* margin: 2rem; */
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 50vw;
    padding: 2rem;
    margin: 3rem;
    /* background-color: pink; */
    /* align-items: center; */
`

export const LandingMain = (props) => {


//   useEffect(() => {
//     // Setup lax
//     lax.init();

//     lax.addDriver("scrollY", function () {
//       return window.scrollY;
//     });

//     // Add your elements
//     lax.addElements(
//       ["h2", "p"],
//       {
//         scrollY: {
//           rotate: [
//             [0, 1e9],
//             [0, 1e9]
//           ]
//         }
//       },
//       []
//     );
//   }, []);


    return (
        <>
            <StyledMain>

                <h2 className="outer"><span>Learn Serious French...</span></h2>
                <HeroSection>
                    <div className="hero">
                        <p>...In A Seriously Fun, and Effective Way.</p>
                    </div>
                    
                </HeroSection>
                <div className="la-tour-eiffel">
                </div>
                <div className="champs">
                </div>
 
            </StyledMain>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default LandingMain;
// export default connect(mapStateToProps, mapDispatchToProps)(LandingMain)
