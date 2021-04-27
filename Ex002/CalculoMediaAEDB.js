function media(){

    var valor1 = document.getElementById('value1').value
    var valor2 = document.getElementById('value2').value
    var valor3 = document.getElementById('value3').value

    var av1 = Number(valor1);
    var av2 = Number(valor2);
    var av3 = Number(valor3);
    var media = Number(av1+av2)/2;

    
    if(av1 <=4)
    {
        media = Number(av2+av3)/2;

        if(media >= 6)
        {  
            alert('Ótimo você foi aprovado!! Média: '+media);
        }
        if(media <=4)
        {
            alert('Você foi mal, reprovado!! Média: '+media);
        }
    }

    if(av2 <=4)
    {
        media = Number(av1+av3)/2;

        if(media >= 6)
        {  
            alert('Ótimo você foi aprovado!! Média: '+media);
        }
        if(media <=4)
        {
            alert('Você foi mal, reprovado!! Média: '+media);
        }
    }

    if(av1 && av2 > 4)
    {
        if(media >= 6)
      {  
        alert('Ótimo você foi aprovado!! Média: '+media);
      }
        if(media <=4)
      {
        alert('Você foi mal, reprovado!! Média: '+media);
      }

    }
    if(av1 && av2 < 4)
    {

        alert('Você foi mal, Reprovou direto!! Média: '+media);

    }
}