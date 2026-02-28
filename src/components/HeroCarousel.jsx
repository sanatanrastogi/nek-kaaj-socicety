import { useState, useEffect } from 'react';
import "../styles/HeroCarousel.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const slidesData = [
    {
        image: "/assets/banners/about.png",
        titleKey: "hero_title",
        descKey: "hero_desc",
    },
    {
        image: "/assets/banners/contact.png",
        titleKey: "hero_title2",
        descKey: "hero_desc2",
    },
    {
        image: "/assets/banners/donate.png",
        titleKey: "hero_title3",
        descKey: "hero_desc3",
    },
    {
        image: "/assets/banners/hero.png",
        titleKey: "hero_title4",
        descKey: "hero_desc4",
    },
    {
        image: "/assets/banners/programs-hero.png",
        titleKey: "hero_title5",
        descKey: "hero_desc5",
    }
];

const HeroCarousel = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slidesData.length);
    const prevSlide = () => setCurrent((prev) => prev === 0 ? slidesData.length - 1 : prev - 1);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run only once on mount

    return (
        <section className='hero-carousel'>
            {slidesData.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className='carousel-overlay'>
                        <div className='carousel-content'>
                            <h1>{t("hero_title")}</h1>
                            <p>{t("hero_desc")}</p>

                            <div className='hero-buttons'>
                                <button className='primary-btn'>{t("hero_btn1")}</button>
                                <button className='secondary-btn' onClick={() => navigate("/donate")}>
                                    {t("hero_btn2")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button className='carousel-control prev' onClick={prevSlide}>❮</button>
            <button className='carousel-control next' onClick={nextSlide}>❯</button>

            {/* Indicators */}
            <div className='carousel-indicators'>
                {slidesData.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? 'active-dot' : ''}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;