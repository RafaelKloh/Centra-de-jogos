import { modalOGanha,modalXGanha,modalVelha } from "../modal/script.js"
let casas =document.querySelectorAll('[id^="casa"]')
let turno = 0
let qtdJogadas = 0
let xGanha = false
let oGanha = false

casas.forEach(casa => {
    casa.addEventListener("click",function(){
        qtdJogadas ++
        if(casa.innerHTML == "" && turno == 0){
            casa.innerHTML = "X"
            turno = 1
        }

        //X ganha
        else if (casa.innerHTML == "" && turno == 1){
            casa.innerHTML = "O"
            turno = 0
        }

        if(casas[0].innerHTML == "X" && casas[1].innerHTML == "X" && casas[2].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[3].innerHTML == "X" && casas[4].innerHTML == "X" && casas[5].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[6].innerHTML == "X" && casas[7].innerHTML == "X" && casas[8].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[0].innerHTML == "X" && casas[3].innerHTML == "X" && casas[6].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[1].innerHTML == "X" && casas[4].innerHTML == "X" && casas[7].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[2].innerHTML == "X" && casas[5].innerHTML == "X" && casas[8].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[0].innerHTML == "X" && casas[4].innerHTML == "X" && casas[8].innerHTML == "X"){
            xGanha = true
            
        }

        else if(casas[2].innerHTML == "X" && casas[4].innerHTML == "X" && casas[6].innerHTML == "X"){
            xGanha = true
            
        }

        //O ganha

        else if(casas[0].innerHTML == "O" && casas[1].innerHTML == "O" && casas[2].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[3].innerHTML == "O" && casas[4].innerHTML == "O" && casas[5].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[6].innerHTML == "O" && casas[7].innerHTML == "O" && casas[8].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[0].innerHTML == "O" && casas[3].innerHTML == "O" && casas[6].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[1].innerHTML == "O" && casas[4].innerHTML == "O" && casas[7].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[2].innerHTML == "O" && casas[5].innerHTML == "O" && casas[8].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[0].innerHTML == "O" && casas[4].innerHTML == "O" && casas[8].innerHTML == "O"){
            oGanha = true
            
        }

        else if(casas[2].innerHTML == "O" && casas[4].innerHTML == "O" && casas[6].innerHTML == "O"){
            oGanha = true
            
        }

        if(xGanha == true){
            modalXGanha()
        }

        if(oGanha == true){
            modalOGanha()
        }

        else if(qtdJogadas === 9){
           modalVelha()
        }
    })
})


