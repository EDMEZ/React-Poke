import logo from './logo.svg';
import './App.scss';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Aside } from './components/Aside';
import { Nav } from './components/Nav';
import { Home } from './Pages/Home';

import { Pokemons } from './Pages/Pokemons';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>

        </Header>
    
        <div className='container'>
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Pokemons/:PokemonsId' element={<Pokemons/>} />
            </Routes>
          </main>

          <Aside>
          </Aside>
        </div>

        <Footer>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
