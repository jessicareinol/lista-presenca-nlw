//array
let participantes = [
  {
    nome: "Jéssica",
    email: "jessica@gmail.com",
    dataInscricao: new Date(2024, 2, 01, 19, 23),
    dataCheckIn: new Date(2024, 2, 01, 20, 20)
  },
  {
    nome: "Diego",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 1, 02, 19, 23),
    dataCheckIn: new Date(2024, 1, 05, 20, 20)
  },
  {
    nome: "Maria",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 10, 30),
    dataCheckIn: new Date(2024, 0, 15, 11, 25)
  },
  {
    nome: "Pedro",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 3, 03, 14, 45),
    dataCheckIn: new Date(2024, 3, 05, 15, 30)
  },
  {
    nome: "Ana",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 13, 10),
    dataCheckIn: new Date(2024, 2, 25, 14, 15)
  },
  {
    nome: "Carlos",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 1, 25, 9, 55),
    dataCheckIn: new Date(2024, 1, 27, 10, 40)
  },
  {
    nome: "Fernanda",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 0, 05, 18, 20),
    dataCheckIn: null
  },
  {
    nome: "Rafael",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 2, 12, 11, 30),
    dataCheckIn: null
  },
  {
    nome: "Camila",
    email: "camila@gmail.com",
    dataInscricao: new Date(2024, 1, 18, 16, 40),
    dataCheckIn: new Date(2024, 1, 20, 17, 35)
  },
  {
    nome: "Lucas",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 0, 30, 21, 10),
    dataCheckIn: new Date(2024, 1, 05, 22, 5)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null  
  }

  // verificar se o particpante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?' 

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email  
  )
  
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}