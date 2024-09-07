import { useState, useEffect } from 'react';
import { projects } from '../../helpers/projectsList';
import './style.css';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animatePrev, setAnimatePrev] = useState(false);
    const [animateNext, setAnimateNext] = useState(false);

    useEffect(() => {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }, [currentIndex]);

    const nextSlide = () => {
        setAnimateNext(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setTimeout(() => setAnimateNext(false), 500); // Длительность анимации в миллисекундах
    };

    const prevSlide = () => {
        setAnimatePrev(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        setTimeout(() => setAnimatePrev(false), 500); // Длительность анимации в миллисекундах
    };

    return (
        <header className="header">
            <div className="carousel">
                <button
                    className={`carousel-button prev ${animatePrev ? 'animate-prev' : ''}`}
                    onClick={prevSlide}
                >
                    &#9664;
                </button>
                <div className="carousel-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projects.map((project, index) => (
                            <div key={index} className="carousel-item">
                                <a href={`/project/${index}`}>
                                    <img src={project.img} alt={project.title} />
                                </a>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className={`carousel-button next ${animateNext ? 'animate-next' : ''}`}
                    onClick={nextSlide}
                >
                    &#9654;
                </button>
            </div>
        </header>
    );
};

export default Header;

