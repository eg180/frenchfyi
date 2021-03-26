import React from 'react';
import {
  Link,
  Route, 
  Switch
} from 'react-router-dom';
import * as Lessons from './Lessons';
import LearningMain from './LearningMain'
import styled from 'styled-components';



const StyledNavLearingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .the-content {
    min-height: 80vh;
    background-color: grey;
    flex-grow: 1;
    /* object-fit: contain; */
  }
`





class AccordionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false,
      sectionTitle: "Foundations",
      selectedComponent: ''
    };
    // bind event handler methods here (defined below) for callback to work
    this.toggleContentVisible = this.toggleContentVisible.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.chapterTitle = this.chapterTitle.bind(this);
  }


  handleClick(e) {
    console.log(e.target.value)
  };

  toggleContentVisible() {
    // called at onClick of accordion button
    // toggles contentVisible between true and false
    this.setState((prevState) => {
      return { contentVisible: !prevState.contentVisible };
    });
  }
  
  render() {


  
    
    return (
      <StyledNavLearingContainer>
        

        <div className="accordion_container">
          <div className="accordion">
            {/* when button clicked, toggle the contentVisible value in our state*/}
            <button
              type="button"
              className="accordion_title"
              onClick={this.toggleContentVisible}
            >
              {this.state.sectionTitle}
            </button>
          </div>
          {/* For the below Div hide / show:
              Using string literals, and a ternary if check on our states contentVisible value,
              we append the .show_content CSS class if contentVisible === true
              else we append the empty string if contentVisible === false
              Note: We are just combining multiple CSS classes here to create different effects
              Same as how we use CSS class combination in regular web pages to create visuals.
          */}
          <div
            className={`accordion_content ${
              this.state.contentVisible ? "show_content" : ""
            }`}
          >
            <div className="list_item_container">
              <p><Link to="/lesson/0/intro">Intro</Link></p>
            </div>          
            <div className="list_item_container">
              <p><Link to="#">être et avoir</Link></p>
            </div>
            <div className="list_item_container">
              <p><Link to="#">Basic Numbers</Link></p>
            </div>
          </div>
        </div>
      </StyledNavLearingContainer>
    );

  }

  


  // renderSelectedComponent(selectedComponent) {
  //   if (!selectedComponent || selectedComponent === undefined) {
  //     return <div><p>No Component Selected</p></div>

  //   const Lesson = Lessons[selectedComponent];
  //   }
  // }


}

export default AccordionMenu;
