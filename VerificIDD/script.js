function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano= document.getElementById("textano")
var res = document.getElementById("res")
 if (fano.value.length == 0 || (fano.value) >=ano){
     window.alert("[ERRO] Verifique os dados e tente novamente!")
 } else {
     var fsex=document.getElementsByName("radsex")
     var idade = ano - Number(fano.value)
     var img=document.createElement("img")
      img.setAttribute("id","foto")
     var genero = ''
     if(fsex[0].checked){
         genero= "homem"
         if( idade>=0&& idade<10){
             //criança
            img.setAttribute("src","imagemEx15/criancahomem.png")
         }else if (idade <21){
             //jovem
             img.setAttribute("src","imagemEx15/jovemhomem.png")
         }else if (idade <50){
             //alduto
             img.setAttribute("src","imagemEx15/homemadulto.png")
         }else {
             // idoso
             img.setAttribute("src","imagemEx15/idosohomem.png")
         }
        
        }else if(fsex[1].checked){
         genero="Mulher"
         if(idade >=0 && idade <10){
             //criança
             img.setAttribute("src","imagemEx15/criancamulher.png")
        }else if (idade <21){
            //jovem
             img.setAttribute("src","imagemEx15/jovemmulher.png")
        }else if (idade <50){
                //adulta
             img.setAttribute("src","imagemEx15/Mulheradulta.png")
        }else{
                //idosa
             img.setAttribute("src","imagemEx15/idosamulher.png")
        }
        
     }
     res.style.textAlign="center" // deixa o texto centralizado
     res.innerHTML=" Detectamos "+genero+" com " +idade+" anos "
     res.appendChild(img)
 }

}