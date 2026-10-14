
import { useEffect } from "react";
import "./PackageModal.css";

export default function PackageModal({ packageData, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    if (!packageData) return null;

    return (
        <div className="package-modal__overlay" onClick={onClose}>
            <div
                className="package-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="package-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="package-modal__close"
                    onClick={onClose}
                    aria-label="Close package details"
                >
                    &times;
                </button>

                <img
                    className="package-modal__image"
                    src={packageData.image}
                    alt={packageData.title}
                />

                <div className="package-modal__content">
                    <p className="package-modal__eyebrow">
                        EXTREME HOLIDAYS
                    </p>

                    <h2 id="package-modal-title">
                        {packageData.title}
                    </h2>

                    <p>{packageData.text}</p>

                    {packageData.duration && (
                        <p>
                            <strong>Duration:</strong> {packageData.duration}
                        </p>
                    )}

                    {packageData.price && (
                        <p>
                            <strong>Price:</strong> {packageData.price}
                        </p>
                    )}

                    <div className="package-modal__actions">
                        <button
                            className="package-modal__button package-modal__button--secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>


                        <a
                            className="package-modal__button package-modal__button--primary"
                            href={`https://wa.me/919847483961?text=${encodeURIComponent(
                                `Hello Extreme Holidays! I'm interested in your ${packageData.title} package. Please share more details about the package, duration, and price.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                        >
                            Send Enquiry
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
