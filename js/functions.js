function mudaFoto(foto){
    document.getElementById("icone").src=foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('crendames').value);
    if (qtd <= 0)
        document.getElementById('crendamestotal').value = "Não Possuo";
    else
    if (qtd <= 1212)
        document.getElementById('crendamestotal').value = "Menos que R$1.212,00";
    else
    if (qtd <= 3636)
        document.getElementById('crendamestotal').value = "Entre R$1.212,00 e R$3.636,00";
    else
    if (qtd <= 6060)
        document.getElementById('crendamestotal').value = "Entre R$3.636,00 e R$6.060,00";
    else
    if (qtd <= 8484)
        document.getElementById('crendamestotal').value = "Entre R$6.060,00 e R$8.484,00";
    else
    if (qtd <= 10908)
        document.getElementById('crendamestotal').value = "Entre R$8.484,00 e R$10.908,00";
    else
    if (qtd <= 13332)
        document.getElementById('crendamestotal').value = "Entre R$10.908,00 e R$13.332,00";
    else
    if (qtd <= 15756)
        document.getElementById('crendamestotal').value = "Entre R$13.332,00 e R$15.756,00";
    else
    if (qtd <= 18180)
        document.getElementById('crendamestotal').value = "Entre R$15.756,00 e R$18.180,00";
    else
        document.getElementById('crendamestotal').value = "Acima de R$18.180,00";
}

function botao(){
    alert("Obrigado pela atenção!");
}

function desabilitaCampo(event){
    let change = event.currentTarget.value;
    
    let select = document.querySelector('#ibairro');
  
    let input = document.querySelector('#ccidade2');
  
    if (change === "S") {
      input.disabled = true;
      select.disabled = false;
    } else {
      input.disabled = false;
      select.disabled = true;
    }
  }