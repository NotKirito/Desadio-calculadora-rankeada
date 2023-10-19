 /*
  function calcVeD(vitoria, derrota) {
    // Aqui, você pode fazer o que quiser com as variáveis
    console.log("Valor da vitoria: " + vitoria);
    console.log("Valor da derrota: " + derrota);
  
    // Por exemplo, somar as variáveis e retornar o resultado
    var resultado = vitoria - derrota;
    return resultado;


    }
  

  // Chamando a função e passando os valores das variáveis
  var V = 55;
  var D = 5;
  var saldoRanked = calcVeD(V , D);
  
  //laço de repetição 

    if(saldoRanked < 10){
        console.log(`O Herói tem saldo de ${V} está no nivel de ferro`)
    }else if(saldoRanked == 11 || saldoRanked < 20){
        console.log(`O Herói tem saldo de ${V} está no nivel de Bronze`)
    }else if(saldoRanked == 21 || saldoRanked < 50){
      console.log(`O Herói tem saldo de ${V} está no nivel de Prata`)
    }else if(saldoRanked == 51 || saldoRanked < 80){
      console.log(`O Herói tem saldo de ${V} está no nivel de Ouro`)
    }else if(saldoRanked == 81 || saldoRanked < 90){
      console.log(`O Herói tem saldo de ${V} está no nivel de Diamante`)
    }else if(saldoRanked == 91 || saldoRanked < 100){
      console.log(`O Herói tem saldo de ${V} está no nivel de Lendario`)
    }else{ 
      console.log(`O Herói tem saldo de ${V} está no nivel de Imortal`)
    }
    
    */

    var V = 55; 
    var D = 5; 
    var saldoRanked = V - D; 
    // Determine the level based on saldoRanked 
    var level; 
    switch (true){ 
      case saldoRanked < 10: level = "Ferro"; 
      break; 
      case saldoRanked < 20: level = "Bronze"; 
      break; 
      case saldoRanked < 50: level = "Prata"; 
      break; 
      case saldoRanked < 80: level = "Ouro"; 
      break; 
      case saldoRanked < 100: level = "Diamante"; 
      break; 
      default: level = "Imortal"; }
  
      // Exibindo o resultado
  
      console.log(`O Herói de saldo ${V} está no nivel de ${level}`);