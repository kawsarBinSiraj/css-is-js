export const css = `
ul.ul-li {
    list-style: none;
    max-width: 700px;
    margin: auto;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
}

#game ul li {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4267B2;
    position: relative;
    margin-bottom: 4px;
}
#game ul li:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    width: 100%;
    background-color: #4267B2;
    z-index: 10;
}

.block {
    background-image: url(https://duckhunt-game-purecss.netlify.app/img/Blue_check.svg.png);
    background-size: 50px;
    background-position: top center;
    background-repeat: no-repeat;
    position: absolute;
    top: 4%;
    left: 2%;
    height: 92%;
    width: 96%;
    background-color: #F1F5F9;
    z-index: 1;
    display: none; 
}

#game {
    counter-reset: autoIncre;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index : -10
}

#game .form-check img {
    width: 50px;
    height: auto;
    transform: translateY(30px);
    animation: upDown 1s infinite;
}

#game ul li:nth-child(1) .form-check img {
    animation-timing-function: ease-in;
}

#game ul li:nth-child(2) .form-check img {
    animation-timing-function: cubic-bezier(1,.27,0,1.23);
    animation-delay: 1.6s;
}

#game ul li:nth-child(3) .form-check img {
    animation-timing-function: cubic-bezier(1,.27,0,1.23);
    animation-delay: 2s;
}

#game ul li:nth-child(4) .form-check img {
    animation-timing-function: ease;
    animation-delay: .4s;
}

#game ul li:nth-child(5) .form-check img {
    animation-timing-function: linear;
    animation-delay: 1.3s;
}

#game ul li:nth-child(6) .form-check img {
    animation-timing-function: cubic-bezier(.43,.31,.48,.99);
}

#game ul li:nth-child(7) .form-check img {
    animation-timing-function: cubic-bezier(1,.07,.09,.8);
    animation-delay:2.2s;
}
#game ul li:nth-child(7) .form-check img {
    animation-timing-function:ease-in-out;
    animation-delay: .6s;
}


#game .form-check  {
    padding: 0;
}
#game .form-check .form-check-label {
    cursor: pointer;
}

#game .form-check .form-check-input[type="checkbox"] {
    visibility: hidden;
}


#game .form-check .form-check-input[type="checkbox"]:checked {
    counter-increment: autoIncre ;
}


#game .form-check .form-check-input[type="checkbox"]:checked ~ .block{
    display: block!important;
}

#game h3 {
    font-size: 2.5rem;
    position: relative;
    z-index: 150;
    color: #222;
    animation: colorChange 2s forwards 8s;
}

#game h3.tryAgain > a {
    display: inline-block;
    font-size: 1rem;
    position: relative;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 30px;
    padding: 6px 25px;
    text-decoration: none;
    transform: translateX(-100%);
    visibility: hidden;
    animation: try 4s forwards 8s;
}

#game h3.score:after {
    content: counter(autoIncre);
}

#game h4:after {
    display: inline-block;
    content: '8s';
    animation: timeCount 8s forwards 1s;
}

#game .flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

#game:after {
    content: 'Game Over';
    display: block;
    font-weight : 200;
    position: absolute;
    tex-transform : uppercase;
    left: 0;
    top: 0;
    background-color: #4267B2;
    width: 100%;
    height: 100%;
    z-index: 100;
    transform: translate(-100%);
    animation: gameOver 3s forwards 8s;
    font-size: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius : 4px;
    z-index : 1;
}   

.refresh.icon {
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% - 25px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border-top: solid 1px currentColor;
    border-bottom: solid 1px currentColor;
    border-left: solid 1px transparent;
    border-right: solid 1px currentColor;
}

.refresh.icon:before {
    content: '';
    position: absolute;
    left: 1px;
    top: 10px;
    width: 3px;
    height: 3px;
    border-top: solid 1px currentColor;
    border-left: solid 1px currentColor;
    -webkit-transform: rotate(-22.5deg);
    transform: rotate(-22.5deg);
}


@keyframes upDown {
    0%,100% {
        transform: translateY(35px);
    }
    50% {
        transform: translateY(-55px);
    }
}

@keyframes gameOver {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }

}
@keyframes colorChange {
    from {
        color: #222;
    }
    to {
        color: #fff;
    }

}

@keyframes timeCount {
    0% {
        content: '8s';
    }
    12% {
        content: '7s';
    }
    24% {
        content: '6s';
    }
    36% {
        content: '5s';
    }
    48% {
        content: '4s';
    }
    60% {
        content: '3s';
    }
    72% {
        content: '2s';
    }
    84% {
        content: '1s';
    }
    100% {
        content: '0s';
    }
}

@keyframes try {
    from {
        transform: translateX(-100%);
        visibility: hidden;
    }
    to {
        transform: translateX(0);
        visibility: visible;
    }

}
`