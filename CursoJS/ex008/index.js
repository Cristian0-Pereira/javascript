var agora = new Date()
var diaSemana = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()

switch(diaSemana) {
    case 0: 
        console.log('Domingo'+hora+':'+min+':'+sec)
        break
    case 1: 
        console.log('Segunda-feira'+hora+':'+min+':'+sec) 
        break
    case 2: 
        console.log('Terça-feira '+hora+':'+min+':'+sec)
        break
    case 3:
        console.log('Quarta-feira'+hora+':'+min+':'+sec)
        break
    case 4:
        console.log('Quinta-feira'+hora+':'+min+':'+sec) 
        break
    case 5:
        console.log('Sexta-feira'+hora+':'+min+':'+sec) 
        break
    case 6:
        console.log('Sábado'+hora+':'+min+':'+sec) 
        break
    default:
        console.log('Dia inválido!')
        break
    }