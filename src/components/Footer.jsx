import React from "react";

function Footer() {
    return(
        <footer>
            <div>Made with <i className="fa-solid fa-heart heart" /> by Carlos Augusto </div>
            <div className="social-medias-container">
                <div className="social-medias">
                    <a href="https://www.linkedin.com/in/carlos-cardoso-b57072238/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin linkedin"></i>
                    </a>

                    <a href="https://github.com/Aumaca" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github github"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UCToKuPYG70DXB4BpdN39p8Q" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer