const urlBase = `https://api.openweathermap.org/data/2.5/weather`
let apiKey = `fb85ceb10fdebcffbc69a5c16581de4b`
let diferenciaGrados = 273.15;

document.getElementById('buscar').addEventListener('click',() =>{
    const ciudad = document.getElementById('ciudad').value 

    if(ciudad){
        obtenerClima(ciudad);
    }else{
        alert('ingrese ciudad');
    }
})

function obtenerClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}&lang=es`)
    .then(data => data.json())
    .then(data => mostradDatosClima(data))
}

function mostradDatosClima(data) {
    const respuestaData = document.getElementById('respuesta')
    respuestaData.innerHTML= '';
    const ciudad = data.name;
    const pais = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const infoCiudad = document.createElement('h4')
    infoCiudad.innerHTML= `${ciudad}-${pais}`;
    const infoTemp = document.createElement('p')
    infoTemp.innerHTML= `la temperatura es de : ${Math.floor(temperatura-diferenciaGrados)} grados`;
    const infoHumedad = document.createElement('p')
    infoHumedad.innerHTML= `la humedad es de : ${humedad}`;
    const descri = document.createElement('p')
    descri.innerHTML= `descripcion del tiempo : ${descripcion}`;
    const infoIcono = document.createElement('img')
    infoIcono.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    respuestaData.appendChild(infoCiudad);
    respuestaData.appendChild(infoTemp);
    respuestaData.appendChild(descri);
    respuestaData.appendChild(infoIcono);
    
}