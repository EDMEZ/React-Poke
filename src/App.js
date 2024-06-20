import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Aside } from './components/Aside';
import { Nav } from './components/Nav';
function App() {
  return (
    <div className="App">
      <Header>

      </Header>
  
      <div className='container'>
        <Main>
        </Main>

        <Aside>
        </Aside>
      </div>

      <Footer>
      </Footer>
    </div>
  );
}

export default App;
