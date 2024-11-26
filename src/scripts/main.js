AOS.init();


const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60

    const diasEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasEvento = Math.floor((distanciaEvento % diaEmMs) / (horaEmMs));
    const minutosEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs);
    const segundosEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    console.log(diasEvento);
    console.log(horasEvento);
    console.log(minutosEvento);
    console.log(segundosEvento);


    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if(distanciaEvento < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);