import string from './css'

const player ={
    id : undefined,
    n  : 1,
    time : 100,
    ui : {
        demo  : document.querySelector('#demo'),
        demo2  : document.querySelector('#demo2')
    },
    init :() =>{
        player.ui.demo.innerHTML = string.substr(0,player.n)
        player.ui.demo2.innerText = string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents :()=> {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run : () =>{
        player.n +=1
        if(player.n >string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerHTML = string.substr(0,player.n)
        player.ui.demo2.innerText = string.substr(0,player.n)
        player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight
    },
    play: ()=>{
       player.id = setInterval(player.run,player.time)
    },
    pause : () =>{
        window.clearInterval(player.id)
    },
    slow : ()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal : () =>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast : () =>{
        player.pause()
        player.time = 0
        player.play()
    }

}

player.init()





