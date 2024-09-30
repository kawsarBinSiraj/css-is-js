export const css = `
#slider {
    display: flex;
    align-items: center;
    justify-content: center;
}
.slider-container {
    height: 500px;
    overflow: hidden;
    position: relative;
    max-width: 1000px;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
}

#slider input[type="radio"] {position:absolute; top:-9999px; left:-9999px; visibility: hidden;}
#slider input[type="radio"]:checked ~ .slide-item {transform: translate3d(0, 100%, 0);}
#slider input[type="radio"]:checked + .slide-item {opacity: 1;transform: translate3d(0, 0, 0);z-index: 1;}
#slider input[type="radio"]:checked + .slide-item + .slide-nav {z-index: 1;}
#slider input[type="radio"]:checked:nth-of-type(1) + .slide-item + .slide-nav + .slide-dots .slide-dot:nth-child(1) {background-color: #fff;}
#slider input[type="radio"]:checked:nth-of-type(2) + .slide-item + .slide-nav + .slide-dots .slide-dot:nth-child(2) {background-color: #fff;}
#slider input[type="radio"]:checked:nth-of-type(3) + .slide-item + .slide-nav + .slide-dots .slide-dot:nth-child(3) {background-color: #fff;}
#slider .slide-item {height: 100%;width: 100%; opacity: 0;position: absolute;top: 0;left: 0;z-index: 0;transform: translate3d(-100%, 0, 0);transition: all 1s ease;width: 100%;}
#slider .slide-nav {padding: 20px;position: absolute;top: 50%;transform: translate3d(0, -50%, 0);width: 100%;z-index: 0;}
#slider .slide-prev {cursor: pointer;float: left;}
#slider .slide-prev::after {border-top: 2px solid #fff;border-left: 2px solid #fff;border-radius: 1px;content: '';display: block;height: 20px;transform: rotate(-45deg);width: 20px;}
#slider .slide-next { cursor: pointer;float: right;}
#slider .slide-next::before {border-top: 2px solid #fff;border-right: 2px solid #fff;border-radius: 1px;content: '';display: block;height: 20px;transform: rotate(45deg);width: 20px;}
#slider .slide-dots {padding: 50px;position: absolute;bottom: 0%;z-index: 1;text-align: center;width: 100%;}
#slider .slide-dot {border: 2px solid #fff;cursor: pointer;display: inline-block;height: 15px;width: 15px;}
#slider .slide-img {width: 100%;height: 100%;}
#slider .slide-img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
#slider .slide-item .slide-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    background-image: linear-gradient(to top, rgba(161, 140, 209, 0.71) 0%, rgba(251, 194, 235, 0.1) 100%);
    text-align:center;
}
#slider .slide-item .slide-content h3 {
    font-size: 3rem;
    margin-bottom: 15px;
    text-transform: uppercase;
}
#slider .slide-item .slide-content p {
    font-size: 1.2rem;
    letter-spacing: 5px;

}
`