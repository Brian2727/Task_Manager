
import './App.css'
import {MainLayout} from "./styles/Layouts.js";
import Orb from "./components/Orb/orb.jsx";
import styled from "styled-components";
import Navigation from "./components/Navigation/navigation.jsx";

function App() {
  const AppStyles = styled.div`
    height: 100vh;
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`

  return <AppStyles className="App">
    <Orb/>
    <MainLayout>
        <Navigation/>
      <main>

      </main>
    </MainLayout>
  </AppStyles>
}



export default App
