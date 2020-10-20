const string = `
.skin *{margin: 0;padding: 0;box-sizing: border-box;}
.skin *::before{box-sizing: border-box;}
.skin *::after{box-sizing: border-box;}

.skin{
    background: #ffe600;
    min-height: 100vh;
    position: relative;
}

.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    height: 10px;
    width: 10px;
    position: relative;
    left: 50%;
    top: 160px;
    margin-left: -10px;
}
.yuan{
    position: absolute;
    height: 10px;
    width: 20px;
    top: -20px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background: black;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.eye{
    border: 2px solid black;
    position: absolute;
    height: 64px;
    width: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    border: 3px solid black;
    display: block;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background: #fff;
    margin-left: 8px;
}

.eye.left{
    transform: translateX(-100px);
}

.eye.right{
    transform: translateX(100px);
}

.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -100px;
}

.mouth .up .lip.left{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius:  0 0 0 50px;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-16deg);
    position: absolute;
    left: 50%;
    margin-left: -50%;
    z-index: 2;
    background: #ffe600;
}
.mouth .up .lip.right{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius:  0 0 50px 0;
    border-top: transparent;
    border-left: transparent;
    transform: rotate(16deg) translateX(98px) translateY(-28px);
    position: absolute;
    z-index: 2;
    background: #ffe600;
}

.mouth .down{
    /* border: 3px solid red; */
    width: 100%;
    height: 160px;
    position: absolute;
    overflow: hidden;
    top: 16px;
}

.mouth .down .yuan1{
    border: 3px solid black;
    height: 1000px;
    width: 150px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    position: absolute;
    border-radius: 75px / 300px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    height: 300px;
    width: 200px;
    position: absolute;
    bottom: -170px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face{
    position: absolute;
    width: 88px;
    height: 88px;
    left: 50%;
    border: 3px solid black;
    top: 240px;
    margin-left: -44px;
    z-index: 3;
}

.face.left{
    transform: translateX(-180px);
    background: red;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: red;
    border-radius: 50%;
}`
export default string;