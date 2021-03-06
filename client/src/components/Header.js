import React from 'react';
import { Link } from 'react-router-dom';
import { device } from "./device.js";
import styled from 'styled-components';
// import { connect } from 'react-redux'

const StyledHeader = styled.header`
    @media ${device.chromeCutOff} {
      #main-title {
          font-size: .25rem;
          min-height: 3vh;
      }
    }
    #main-title {
        font-family: 'Permanent Marker', cursive;
        font-size: 5rem;
        color: #ff006e;
        margin-left: 1rem;
    }
    background-color: #bcf4de;
    min-height: 12vh;
`

export const Header = (props) => {
    return (
        <StyledHeader>
            <Link to="/"><h1 id="main-title">French.fyi</h1></Link>
            
        </StyledHeader>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Header;
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
