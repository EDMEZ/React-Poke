import './Nav.scss'
import { NavItens } from './Navitens';

export function Nav(){
    return (
        <nav className="Nav">
            <div className="Container">
                <ul className='Nav'>
                    {NavItens.map((item, index) =><li key={index}>{ item }</li> )}
                </ul>
            </div>
        </nav>
    );
}