function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são " + hora + " horas"
    if( hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = ('../modelo/assets/manha.png')
        document.body.style.background = '#a39e64'
    } else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = ('../modelo/assets/tarde.png')
       document.body.style.background = '#e6705a'
    } else{
        //BOA NOITE!
        img.src = ('../modelo/assets/noite.png')
        document.body.style.background = '#0b1d21'
    }

}
