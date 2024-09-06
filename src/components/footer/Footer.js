import "./style.css";
import vk from './../../img/icons/vk.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <div className="copyright">
                            <p className="text">Design and Development</p>
                        </div>
                        <ul className="social">
                            <li className="social__item">
                                <a href="https://vk.com/ya.production" className="social__link">
                                    <img src={vk} alt="VK Logo" className="social__icon" />
                                </a>
                            </li>						
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
