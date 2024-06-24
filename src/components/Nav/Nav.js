import './Nav.scss'
import { NavItens } from './Navitens';

export function Nav(){
    return (
        <ul className='Nav'>
            {NavItens.map((item, index) => <li key={index}>{ item }</li> )}
        </ul>
    );
}