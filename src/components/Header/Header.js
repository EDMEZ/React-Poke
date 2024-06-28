import './Header.scss'
import { Nav } from '../Nav'
export function Header(){
    return(
        <>
            <header className="Header">
                <div className="Container">
                    <h1>Pokeloja</h1>
                    <input type="search"></input>
                    <div>
                        <h3>Sobre</h3>
                        <h3>Contato</h3>
                    </div>
                </div>
            </header>
            <Nav />
        </>
        
    )
}