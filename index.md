# JavaScript

*querySelector*
pesquisa pelo seletor. no caso, a função acha um elemento pelo seletor de tag e substitui atraves do (innerHTML)

//objeto
const participante = {
  nome: "Jéssica",
  email: "jessica@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 20)
}

//array
let participantes = [
  {
    nome: "Jéssica",
    email: "jessica@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 20)
}
]

//estrutura de repetição - loop
for(let participante of participantes) { 
    //faça alguma coisa aqui
    //enquanto tiver participantes nessa lista
  }

# CSS

//junta as bordas, já que normalmente está definido como separate.
  table {
    border-collapse: collapse;
  }

//quando tem um valor aplica em todos os lados. quando tem dois, o primeiro valor aplica em cima e embaixo e o segundo valor aplica nas laterais
  thead th,
  tbody td {
    padding: 12px 16px;
  }

//os dois ultimos valores na cor (1a) caracteriza a opacidade
  tbody td {
    border-top: 1px solid #ffffff1a;
  }

//criar uma variavel
  :root {
  --border: 1px solid #ffffff1a;
}

//seletor universal
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
