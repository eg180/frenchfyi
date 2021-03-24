import { 
  Switch,
  Route
 } from "react-router-dom"; 
import styled from 'styled-components';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import LearningMain from "./components/LearningMain";
import LandingMain from "./components/LandingMain";


const StyledMainDivContainer = styled.main`
  background-color: #ffffff;
  /* background-image: url('/images/france.jpg');
  background-size:cover;
  background-repeat:no-repeat; */
  opacity: 0.95;
`




function App() {
  return (
    <StyledMainDivContainer>
      <Header />
      <Toolbar />

      <Switch>
        
        <Route path="/learn" component={LearningMain} />

        <Route exact path="/" component={LandingMain} />

      </Switch>
      <Footer />
    
      
    
    </StyledMainDivContainer>

  );
}

export default App;
