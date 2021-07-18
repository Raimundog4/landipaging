function contagemRegressiva() {
    let dataAtual = new Date();
                
    let dataExpiracao = new Date("jul 31, 2021 23:59:59");
    let tempoAtual = dataAtual.getTime();
    let tempoExpiracao = dataExpiracao.getTime();
    let tempoRestante = tempoExpiracao - tempoAtual;
    
    let dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    setTimeout(contagemRegressiva, 1000);

    
     if (tempoRestante < 0) {
      clearInterval(contagemRegressiva);
      
      document.getElementById("dias").innerHTML = " ";
      document.getElementById("horas").innerHTML = " ";
      document.getElementById("minutos").innerHTML = " ";
      document.getElementById("segundos").innerHTML = "<small>FIM</small>"; 
      } 
  }
  contagemRegressiva();