export const css = `
#clock {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border:1px solid rgba(34, 34, 34, 0.2);
    margin: 50px auto;
    text-align: center;
    position: relative;
    z-index: 10;
}

#clock:after {
    display: block;
    content: 'kawsarbinsiraj.github.io';
    position: absolute;
    bottom: 30%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #ddd;
    z-index: -10;
}

ul.clockTime {
    list-style: none;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'Cedarville Cursive', cursive;
}

ul.clockTime  > li {
    margin-bottom: 14px;
    position: relative;
}

ul.clockTime.right  > li:nth-child(2) {left: 66px;top: -21px;}
ul.clockTime.right  > li:nth-child(3) {left: 110px;top: -15px;}
ul.clockTime.right  > li:nth-child(4) {left: 120px;}
ul.clockTime.right  > li:nth-child(5) {left: 105px;top: 20px;}
ul.clockTime.right  > li:nth-child(6) {left: 60px;top: 25px;}


ul.clockTime.left {
    position: absolute;
    top: 15%;
    left: 0;
}

ul.clockTime.left  > li:nth-child(1) {left: 68px;top: -22px;}
ul.clockTime.left  > li:nth-child(2) {left: 26px;top: -20px;}
ul.clockTime.left  > li:nth-child(3) {left: 10px;}
ul.clockTime.left  > li:nth-child(4) {left: 25px;top: 15px;}
ul.clockTime.left  > li:nth-child(5) {left: 72px;top: 22px;}


#seconds {
    height: 50%;
    width: 2px;
    background-color: #000;
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: bottom left;
    -webkit-animation: seconds 60s steps(60) infinite;
    animation: seconds 60s steps(60) infinite;
}


#seconds:after ,
#minutes:after,
#hours:after {
    position: absolute;
    display: block;
    content: "";
    top: 100%;
    left: 0;
    height: 20px;
    width: 2px;
    background-color: #000;
}


#minutes {
    height: 37%;
    width: 2px;
    background-color: #000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-100%) rotate(60deg);
    transform-origin: bottom left;
    -webkit-animation: minutesAndHours 3600s steps(60) infinite;
    animation: minutesAndHours 3600s steps(60) infinite;
}


#hours {
    height: 25%;
    width: 2px;
    background-color: #000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-100%) rotate(30deg);
    transform-origin: bottom left;
    -webkit-animation: minutesAndHours 43200s steps(12) infinite;
    animation: minutesAndHours 43200s steps(12) infinite;
}

@keyframes seconds {
    form {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}


@keyframes minutesAndHours {
    form {
        transform: translateY(-100%) rotate(0deg);
    }
    to {
        transform: translateY(-100%) rotate(360deg);
    }
}
`