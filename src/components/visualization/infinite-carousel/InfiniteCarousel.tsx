import React from "react";
import "./InfiniteCarousel.css";

const InfiniteCarousel = () => {
    return (
        <div className="InfiniteCarousel">
            <h2 className="text-2xl mb-3 text-lime-600 font-medium font-poppins">Infinite Carousel — </h2>
            <input id="pause" type="checkbox" /> <label htmlFor="pause"> Pause </label> &nbsp; <input id="reverse" type="checkbox" /> <label htmlFor="reverse"> Reverse </label> &nbsp;
            <input id="radius" type="checkbox" /> <label htmlFor="radius"> Card Circle </label> &nbsp; <input id="normal" defaultChecked type="radio" name="speed" />{" "}
            <label htmlFor="normal"> Normal </label> &nbsp;
            <input id="fast" type="radio" name="speed" /> <label htmlFor="fast"> Fast </label> &nbsp; <input id="medium" type="radio" name="speed" /> <label htmlFor="medium"> Medium </label> &nbsp;
            <input id="slow" type="radio" name="speed" /> <label htmlFor="slow"> Slow </label> &nbsp;
            <div id="css-infinite-carousel">
                <div className="ticker">
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                </div>
                <div className="ticker">
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                    <img src="https://kawsarbinsiraj.github.io/assets/img/favicon/favicon.png" alt="img" />
                </div>
            </div>
            <p className="mt-5">
                @developed_by :{" "}
                <a className="text-blue-500" href="https://kawsarbinsiraj.github.io/" target="_blank" rel="noopener noreferrer">
                    Kawsar Bin Siraj
                </a>
            </p>
        </div>
    );
};

export default InfiniteCarousel;
