function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtAno')
    let res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro, tente novamente!') //Tratando erro do usuário
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
            img.style.width = '300px'
            img.style.height = '250px'
            img.style.borderRadius = '50%'
            img.style.marginTop = '10px'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.jpg')
            }        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}