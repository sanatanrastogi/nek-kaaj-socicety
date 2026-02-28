import { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Lightbox.css";

const Lightbox = ({ lightbox, setLightbox }) => {
    const { images = [], index = 0, title = "", isOpen } = lightbox;

    const [zoom, setZoom] = useState(false);
    const touchStartX = useRef(0);
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);
    const previousFocus = useRef(null);

    const close = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            isOpen: false
        }));
    }, [setLightbox]);

    const prev = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + images.length) % images.length
        }));
    }, [images.length, setLightbox]);

    const next = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % images.length
        }));
    }, [images.length, setLightbox]);

    /* ===============================
       EFFECT: OPEN / CLOSE HANDLING
    =============================== */
    useEffect(() => {
        if (!isOpen) return;

        previousFocus.current = document.activeElement;

        // Lock background scroll
        document.body.style.overflow = "hidden";

        // Focus close button
        setTimeout(() => {
            closeBtnRef.current?.focus();
        }, 0);

        const handleKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();

            // Focus trap
            if (e.key === "Tab") {
                const focusable =
                    modalRef.current.querySelectorAll(
                        "button, [tabindex]:not([tabindex='-1'])"
                    );

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKey);
            previousFocus.current?.focus();
        };
    }, [isOpen, index, close, next, prev]);

    // Reset zoom when image changes
    useEffect(() => {
        setZoom(false);
    }, [index]);

    /* ===============================
       TOUCH SWIPE
    =============================== */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) next();
        if (diff < -50) prev();
    };

    if (!isOpen) return null;

    return (
        <div
            className="lightbox-overlay fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            aria-describedby="lightbox-caption"
            onClick={close}
        >
            <div
                ref={modalRef}
                className="lightbox-content scale-in"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Close Button */}
                <button
                    ref={closeBtnRef}
                    className="lightbox-close"
                    onClick={close}
                    aria-label="Close image gallery"
                >
                    &times;
                </button>

                {/* Navigation */}
                <button
                    className="nav-btn left"
                    onClick={prev}
                    aria-label="Previous image"
                >
                    &#10094;
                </button>

                {/* Main Image */}
                <img
                    key={images[index]}
                    src={images[index]}
                    alt={`${title} - ${index + 1}`}
                    className={`lightbox-main fade-image ${zoom ? "zoomed" : ""}`}
                    onClick={() => setZoom(!zoom)}
                    loading="lazy"
                />

                <button
                    className="nav-btn right"
                    onClick={next}
                    aria-label="Next image"
                >
                    &#10095;
                </button>

                {/* Caption */}
                <div id="lightbox-caption" className="lightbox-caption">
                    <h3 id="lightbox-title">{title}</h3>
                    <span>
                        {index + 1} / {images.length}
                    </span>
                </div>

                {/* Thumbnail Strip */}
                <div className="thumbnail-strip">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            className={`thumb-btn ${i === index ? "active-thumb" : ""}`}
                            onClick={() => setLightbox({ ...lightbox, index: i })}
                            aria-label={`Open image ${i + 1}`}
                        >
                            <img src={img} alt="" loading="lazy" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
