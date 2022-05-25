/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app'; 
const appNode = document.querySelector('#app');  // tengo mi contenedor 
//quiero que escuche todos los clicks dentro de esa pagina 
appNode.addEventListener('click', (evento) => {
    if(evento.target.nodeName === 'h2'){
        window.alert('Hola');
    }
}); 
//api de internacionalizacion, damos formaro a fechas y dar formato a monedas 

// para usarla debo = 
const formatPrice = (price) => {  //no estoy haciendo nada, es solo definirla y ya  
    const newPrice = new window.Intl.NumberFormat(
    'en-EN', 
    {style: 'currency', // podemos cambialo a cualquier moneda 
    currency: 'USD'}).format(price); //debemos acceder a formato de internacionalizacio
    return newPrice;
};

//web api  
//conectarnos al server
//procesar la respuesta y convertirla a json 
//json-data-renderizar info browser 
window.fetch(`${baseUrl}/api/avo`)
//procedo la respuesta y convertirla en JSON 
.then((respuesta) => respuesta.json())
//jSON -DATA - RENDERIZAR INFO BROWSER 
.then((responseJson) => {

    const todosLosItems = [];
    responseJson.data.forEach((item) => {
     //estyoy imprimiendo los 9 items 

    const imagen = document.createElement('img');
    //las rutas deben empezar por http , la que esta en el api es relativa 
    //debemos unir la url 
    imagen.src = `${baseUrl}${item.image}`; //siempre dedemos pasarle la URL de la imagen 
    imagen.className = 'w-28 inline';

    //crear titulo
    const title = document.createElement('h2');
    title.textContent = item.name;
    // title.style = 'font-size: 2rem'; 
    // title.style.fontSize = '3rem';
    title.className = 'text-la font-bold'; // clases que sacamos de tailwinds css 
    
    
    //crear precio
    const price = document.createElement('div');
    //traeremos el precio
    price.className = 'text-gray-600';
    price.textContent = formatPrice(item.price);
    
    
    const container = document.createElement('div');
    container.append(imagen, title, price);
    // container.className = 'flex';

    todosLosItems.push(container)
    });

    appNode.append(...todosLosItems) // aqui dentro del div principal entonces tienes los div que creaste  

});


//podemos usar async await  

//vamos a crear nodos con nombre, imagen , precio


