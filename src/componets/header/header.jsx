import '../generalStyles/generalStyles.css';
import './header.css';
import city from './city.svg';
import Reservation from '../reservation/reservation';


function Header (){

    return (
        <header className="header">
            <div className="header-txt">
                <h1>Easy sleep<span>.</span></h1>
                <Reservation />
            </div>
            <img src={city} alt="icono ciudad"/>
        </header>
    )
}

export default Header;