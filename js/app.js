let tiempoRestante = 0;
let temporizador;
let temporizadorIniciado = false;
 
const salidaTemporizador = document.querySelector("#temporizador");
const btnIniciar = document.querySelector("#iniciar");
const btnPausar = document.querySelector("#pausar");
const btnReiniciar = document.querySelector("#reiniciar");

const iniciarTemporizador = () => {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = Math.floor(tiempoRestante % 60);

    const formatoHora = horas < 10 ? `0${horas}` : horas;
    const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
    const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
    salidaTemporizador.innerHTML = `<h3>${formatoHora}:${formatoMinutos}:${formatoSegundos}</h3>`;
  }else{
    clearInterval(temporizador);
    temporizadorIniciado = false;
    alert('El tiempo ha terminado');
    document.querySelector("#inputNumero").value = "";
    btnIniciar.innerText = 'Iniciar';
  }
};

btnIniciar.addEventListener('click', ()=>{
    if (!temporizadorIniciado) {
        let inputNumero = document.querySelector("#inputNumero").value;
        tiempoRestante = parseInt(inputNumero, 10);
        if (tiempoRestante <= 0 || isNaN(tiempoRestante)) {
            alert('Ingrese un número válido en segundos')
            return;
        }
    }
    iniciarTemporizador();
    temporizador = setInterval(iniciarTemporizador, 1000);
    temporizadorIniciado = true;
     document.querySelector('#label').innerText = 'Temporizador en Marcha';
     btnIniciar.innerText = 'Continuar';
})

btnPausar.addEventListener('click', ()=>{
    clearInterval(temporizador);
    temporizadorIniciado = false;
     document.querySelector("#label").innerText = "Temporizador Detenido";
     btnIniciar.innerText = 'Continuar';
})

btnReiniciar.addEventListener('click', ()=>{
    clearInterval(temporizador);
    tiempoRestante = 0;
    salidaTemporizador.innerHTML = '<h3>00:00:00</h3>'
    temporizadorIniciado = false;
     document.querySelector("#label").innerText = "Ingrese un tiempo en segundos";
     document.querySelector("#inputNumero").value = "";
     btnIniciar.innerText = "Iniciar";
})