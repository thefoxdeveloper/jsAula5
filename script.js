// //exec 1

// let menorAltura = 1000;
// let maiorAltura = 0;

// for (let i = 1; i <= 15; i++) {
//   let altura = parseFloat(prompt(`Digite a altura da pessoa ${i}:`));

//   if (!isNaN(altura)) {
//     if (altura < menorAltura) {
//       menorAltura = altura;
//     }

//     if (altura > maiorAltura) {
//       maiorAltura = altura;
//     }
//   } else {
//     alert("Altura inválida. Por favor, digite um número válido.");
//     i--;
//   }
// }

// document.write(`A menor altura do grupo é: ${menorAltura} cm<br>`);
// document.write(`A maior altura do grupo é: ${maiorAltura} cm`);

// //exec 2

// let alturaPedro = 150;
// let crescimentoPedro = 2;
// let alturaLucas = 110;
// let crescimentoLucas = 3;
// let anos = 0;

// while (alturaLucas < alturaPedro) {
//   alturaPedro += crescimentoPedro;
//   alturaLucas += crescimentoLucas;
//   anos++;
//   document.write("Pedro " + alturaPedro + " Anos: " + anos + "<br>");
//   document.write("Lucas " + alturaLucas + " Anos: " + anos + "<br>");
// }

// document.write(
//   `Levará ${anos} anos para Lucas e Pedro terem o mesmo tamanho.<br>`
// );

// alturaPedro = 150;
// alturaLucas = 110;
// anos = 0;

// while (alturaLucas <= alturaPedro) {
//   alturaPedro += crescimentoPedro;
//   alturaLucas += crescimentoLucas;
//   anos++;
// }

// document.write(`Levará ${anos} anos para Lucas ser maior que Pedro.`);

// //exec 3
// const multiplicando = parseInt(prompt("Digite o número para a tabuada:"));
// const vezes = parseInt(prompt("Digite a quantidade de vezes:"));

// if (isNaN(multiplicando) || isNaN(vezes)) {
//   document.write("Insira números válidos.");
// } else {
//   for (let i = 1; i <= vezes; i++) {
//     const resultado = multiplicando * i;
//     document.write(`${multiplicando} x ${i} = ${resultado} <br>`);
//   }
// }

// //exec 4
// for (let i = 1; i <= 250; i++) {
//   if (i % 3 === 0) {
//     document.write(`<span style="color:red">${i} é múltiplo de 3<br></span>`);
//   } else if (i % 5 === 0) {
//     document.write(`<span style="color:blue">${i} é múltiplo de 5<br></span>`);
//   }
// }

// //exec 5
// let valor = parseInt(prompt("Digite um valor: "));

// if (!isNaN(valor) && valor >= 0) {
//   let contagem = "Contagem: ";
//   for (let i = 0; i <= valor; i++) {
//     contagem += i;
//     if (i < valor) {
//       contagem += ", ";
//     }
//   }
//   contagem += ", FIM!";
//   console.log(contagem);
// } else {
//   console.log("Por favor, digite um número inteiro positivo.");
// }

// //exec 6
// for (let i = 300; i >= 1; i--) {
//   let isPrime = true;

//   if (i <= 3) {
//     isPrime = true;
//   } else if (i % 2 === 0 || i % 3 === 0) {
//     isPrime = false;
//   }

//   console.log(isPrime ? ` [${i}] ` : `${i} `);
// }

// //exec 7

// let soma = 0;
// let qtdPositivos = 0;
// let qtdNegativos = 0;

// for (let i = 1; i <= 10; i++) {
//   let numero = parseFloat(prompt(`Digite o ${i}º número:`));

//   soma += numero;

//   if (numero > 0) {
//     qtdPositivos++;
//   } else if (numero < 0) {
//     qtdNegativos++;
//   }
// }

// let media = soma / 10;
// let percentualPositivos = (qtdPositivos / 10) * 100;
// let percentualNegativos = (qtdNegativos / 10) * 100;

// document.write(`Média aritmética: ${media}<br>`);
// document.write(`Quantidade de valores positivos: ${qtdPositivos} <br>`);
// document.write(`Quantidade de valores negativos: ${qtdNegativos}<br>`);
// document.write(`Porcentagem de valores positivos: ${percentualPositivos}%<br>`);
// document.write(`Porcentagem de valores negativos: ${percentualNegativos}%<br>`);
