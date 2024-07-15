import React from "react";
import "./Baseboard.css";

const Baseboard:React.FC = () => {
    return (
        <div className="baseboard-container">
            <div className="info-bs">
                <h1>Contact Us</h1>
                <div className="zap">
                    <h1>Whatsapp -</h1>
                    <h2>51 99999-9999</h2>
                </div>
                <h3>Common questions</h3>
            </div>
            <div className="made-by">
                <h1>Design and development by @reispedroso</h1>
            </div>
        </div>
    )
}

export default Baseboard;