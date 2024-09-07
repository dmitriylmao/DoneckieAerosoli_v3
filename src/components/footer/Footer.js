import "./style.css";
import vk from './../../img/icons/vk.png';
import gps from './../../img/icons/gps.png';
import mail from './../../img/icons/mail.png';
import tg from './../../img/icons/telegram.png';
import wa from './../../img/icons/whatsapp.png';
import phone from './../../img/icons/phone.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__bottom">
                    <p className="footer__left">©2024</p>
                </div>
                <div className="footer__social">
                    <div className="footer__icons">
                        <a href="https://web.telegram.org/k/#@polkiqwase" target="_blank" rel="noopener noreferrer" className="social__link">
                            <img src={tg} alt="Telegram Logo" className="social__icon" />
                        </a>
                        <a href="https://wa.me/79494779213" target="_blank" rel="noopener noreferrer" className="social__link">
                            <img src={wa} alt="WhatsApp Logo" className="social__icon" />
                        </a>
                        <a href="mailto:info.aerosol@yandex.ru" className="social__link">
                            <img src={mail} alt="Mail Logo" className="social__icon" />
                        </a>
                    </div>
                    <div className="footer__phone">
                        <a href="tel:+79494779213">+7(949)477-92-13</a>
                    </div>
                </div>
                <div className="footer__right">
                        <p className="footer__text">Dev.</p>
                        <a href="https://vk.com/ya.production" target="_blank" rel="noopener noreferrer" className="social__link">
                            <img src={vk} alt="VK Logo" className="social__icon_vk" />
                        </a>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;

