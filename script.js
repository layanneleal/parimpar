function parImpar() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  //Obtem e converte o conteúdo do campo inNumero
  let numero = Number(inNumero.value)
  let resto = numero % 2 == 0 

  //Se não preencheu ou NaN
  if (numero == 0 || isNaN(numero)) {
    alert('Digite um número válido!')
    inNumero.focus()
    return
  }
  //Se o número for maior que 0 e divisível po 2
  if (numero > 0 && resto % 2) {
    outResposta.textContent = 'Resposta: ' + numero + ' é par'
  } else {
    outResposta.textContent = 'Resposta: ' + numero + ' é impar'
  }
}
//Cria referência ao elemento btVerificar e registra um evento associado a função
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', parImpar)