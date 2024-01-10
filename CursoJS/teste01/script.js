function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    // var hora = data.getHours()
    var hora = 10
    hora = hora<10?"0"+hora:hora
    var min = data.getMinutes()
    min = min<10?"0" + min:min
    var seg = data.getSeconds()
    seg = seg<10?"0" + seg:seg
    const hora_completa = hora+":"+min+":"+seg
    msg.innerHTML = `Agora são ${hora_completa}h`
    const intervalo = setInterval(carregar,1000)
}