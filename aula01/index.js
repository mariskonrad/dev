// recebe um nome e o retorna formatado
function formatarNome(nome){
  return nome.replace(/\b\w/g, function(l){ return l.toUpperCase() })
}

// função auxiliar para pegar elementos
function pegarPorId(id) {
  return document.getElementById(id)
}

// pega todos os elementos da página que vamos precisar
var nameInput = pegarPorId('name-input')
var surnameInput = pegarPorId('surname-input')
var fullnameInput = pegarPorId('fullname-input')

// função que vai setar o valor no input do nome completo
function setFullname() {
  var nome = nameInput.value
  var sobrenome = surnameInput.value
  var nomeCompleto = nome + ' ' + sobrenome
  var nomeCompletoFormatado = formatarNome(nomeCompleto)
  fullnameInput.value = nomeCompletoFormatado

  if (nomeCompletoFormatado == 'Maris Konrad') {
    alert('Xim')
  }
}

// associa a função aos inputs de nome e sobrenome
nameInput.addEventListener('input', setFullname)
surnameInput.addEventListener('input', setFullname)
