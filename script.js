const imageBanner = document.getElementById("headerSteam").src;



async function fetchDataAsync(url) {
    const response = await fetch(url);
    console.log(await response.json());
}



function changeImage () {
    console.log(imageBanner)
    var url = document.forms["containerIdJuego"]["idJuego"].value.split("/"),
    num = url[url.length - 3];
    document.getElementById("headerSteam").src="https://cdn.akamai.steamstatic.com//steam//apps//"+num+"//header.jpg"
    fetchDataAsync('https://store.steampowered.com/api/appdetails?appids=438640&cc=ar&filters=price_overview');
;
};

boton.addEventListener('click', event => {
    changeImage();
    
});

