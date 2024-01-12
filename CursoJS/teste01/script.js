function carregar() {
    var mensagem = document.querySelector(".mensagem")
    var imagem = document.querySelector(".imagem")

    var data = new Date()
    var hora = data.getHours()
    // Hora completa abaixo
    hora = hora<10?"0"+hora:hora
    var min = data.getMinutes()
    min = min<10?"0" + min:min
    var seg = data.getSeconds()
    seg = seg<10?"0" + seg:seg
    const intervalo = setInterval(carregar,1000)
    mensagem.innerHTML = `Agora são ${hora}:${min}:${seg}h`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia
        imagem.src = "img/manha.jpg"
        document.body.style.background = "#84baf8"
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        imagem.src = "img/tarde.jpg"
        document.body.style.background = "#f1b84e"
    }else {
        //Boa noite
        imagem.src = "img/noite.jpg"
        document.body.style.background = "#383737"
    }
}