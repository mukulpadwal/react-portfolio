import './Logo.scss';
import LogoS from "../../../assets/images/logo-m.png";

function Logo(){
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="M"/>
        </div>
    );
}

export default Logo;