import React from 'react';
import gps from './../img/icons/gps.png';
import mail from './../img/icons/mail.png';
import tg from './../img/icons/telegram.png';
import wa from './../img/icons/whatsapp.png';
import phone from './../img/icons/phone.png';
import './Contacts.css';  // Подключаем стили

const Contacts = () => {
    return (
        <main className="section-cont">
            <div className="container-cont">
                {/* Контакты */}
                <div className="contacts-list">
                    <div className="contact-item">
                        <img src={phone} alt="Phone" className="icon" />
                        <a href="tel:+79494779213">+7(949)477-92-13</a>
                    </div>
                    <div className="contact-item">
                        <img src={tg} alt="Telegram" className="icon" />
                        <a href="https://web.telegram.org/k/#@polkiqwase" target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
                    </div>
                    <div className="contact-item">
                        <img src={wa} alt="WhatsApp" className="icon" />
                        <a href="https://wa.me/79281762805" target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a>
                    </div>
                    <div className="contact-item">
                        <img src={mail} alt="Mail" className="icon" />
                        <a href="mailto:info.aerosol@yandex.ru">info.aerosol@yandex.ru</a>
                    </div>
                    <div className="contact-item">
                        <img src={gps} alt="address" className="icon" />
                        <a href="https://yandex.ru/maps/-/CDw9JJ8r" target="_blank" rel="noopener noreferrer">РФ, ДНР, г. Донецк, ул. Баумана 1-В, 283030</a>
                    </div>
                </div>

                {/* Карта */}
                <div className="map-container">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.869685%2C47.948051&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDUzNjQ4NTUyEjzQoNC-0YHRltGPLCDQlNC-0L3QtdGG0YzQuiwg0LLRg9C70LjRhtGPINCR0LDRg9C80LDQvdCwLCAx0JIiCg2PehdCFc7KP0I%2C&z=17"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        style={{ border: 0, borderRadius: "40px" }}
                        title="Яндекс Карты"
                    ></iframe>
                </div>
            </div>
        </main>
    );
};

export default Contacts;
