import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #6d6875;
    min-height: 82vh;
`

export const LearningMain = (props) => {
    return (
        <StyledMain>
            <h1>Title</h1>
        </StyledMain>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default LearningMain;
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
