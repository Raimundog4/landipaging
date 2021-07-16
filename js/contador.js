function countdown() {
    let now = new Date();
                
    let eventDate = new Date("jul 18, 2021 23:59:59");
    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTiime;
    
    let d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    let h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remTime % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = d;
    document.getElementById("dias").innerText = d;
    document.getElementById("horas").textContent = h;
    document.getElementById("minutos").textContent = m;
    document.getElementById("segundos").textContent = s;
    setTimeout(countdown, 1000);

    
     if (remTime < 0) {
      clearInterval(countdown);
      
      document.getElementById("dias").innerHTML = " ";
      document.getElementById("horas").innerHTML = " ";
      document.getElementById("minutos").innerHTML = " ";
      document.getElementById("segundos").innerHTML = "<small>FIM</small>"; 
      } 
  }
  countdown();