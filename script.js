const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
const backgroundMusic = document.querySelector('#backgroundMusic')
const startButton = document.querySelector('#start-button')
const startScreen = document.querySelector('#start-screen')
const mainContent = document.querySelector('main')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Estas muy muy segura?',
  'Piensalo',
  'Piensalo muy bien',
  'Mira el otro botón Preciosa',
  '¿De verdad dirás que no? 💔',
  'No me hagas esto 🥺',
  'El botón verde se ve mejor',
  'Dale, no seas malita',
  'Mira qué bonito el otro botón',
  'Te prometo ser detallista',
  '¿Y si lo piensas otra vez?',
  'No me dejes en visto 😢',
  'Vamos, dame una oportunidad',
  'El otro botón te está esperando',
  'Sé que quieres presionar el Sí',
  'Ese botón no funciona hoy 😅',
  'Error 404: Botón no disponible',
  'Este botón está de vacaciones',
  'Mejor el verde, ¿no crees?'
]

// Función para iniciar la experiencia
startButton.addEventListener('click', () => {
  // En iOS necesitamos cargar el audio primero
  backgroundMusic.load()
  backgroundMusic.volume = 0.5
  
  // Intentar reproducir
  backgroundMusic.play().catch(error => {
    console.log('No se pudo reproducir el audio:', error)
  })
  
  // Ocultar pantalla de inicio y mostrar contenido principal
  startScreen.style.display = 'none'
  mainContent.classList.remove('hidden')
})

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)
  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})