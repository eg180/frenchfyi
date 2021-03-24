import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux'

const StyledFooter = styled.footer`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    opacity: .60;
    color: #ffc8dd;
    font-family: 'Bebas Neue', cursive;  
    background-color: #ff006e;
    min-height: 2rem;
    max-height: 2rem;
    img {
        max-height: 2rem;
        margin-left: .5rem;
    }
`

export const Footer = (props) => {
    return (
        <StyledFooter>
            <nav>
            ©2021 french.fyi
            <a href="https://twitter.com/frenchdotfyi" rel="noreferrer" target="_blank"><img src="/images/twitter.png" alt="twitter"/></a>
            </nav>
        </StyledFooter>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Footer;
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
