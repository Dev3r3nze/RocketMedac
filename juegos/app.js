function ToggleMenu(){
    if(document.getElementById("menuLateralClosed").style.display == "flex" || document.getElementById("menuLateralClosed").style.display == ""){
        document.getElementById("menuLateralClosed").style.display = "none"
        document.getElementById("menuLateralOpened").style.display = "grid"
    }else{
        document.getElementById("menuLateralClosed").style.display = "flex"
        document.getElementById("menuLateralOpened").style.display = "none"
    }
    
}
addEventListener("load",function f(){
    console.log(document.getElementById("menuLateralClosed").style.display)
    Juego(3)
})

function Juego(num){
    var title = document.getElementById("titleJuegoBig")
    var image = document.getElementById("imgJuegoBig")
    var rating = document.getElementById("rating")
    var desc = document.getElementById("descJuegoBig")
    var enlace = document.getElementById("enlace")

    switch(num){
        case 1:
            title.innerHTML = "<p>Space Reach</p>"
            image.src = "CapturaReach.png"
            image.style.width = "30%"
            enlace.href = "https://dev3r3nze.itch.io/space-reach"
            rating.childNodes[7].style.display = "none"
            rating.childNodes[9].style.display = "none"
            desc.innerHTML = "<p>(Click en la imagen para jugar, todos están hechos por mi)<br/> En este juego arcade de ambientación espacial podrás simular el lanzamiento de tu cohete tantas veces como quieras tratando de llegar cada vez más lejos, comprando mejoras. ¿Serás capaz de llegar al espacio? Descúbrelo!</p>"
            break;
        case 2:
            title.innerHTML = "<p>Space Explorer</p>"
            image.src = "CapturaExplorador.png"
            image.style.width = "70%"
            enlace.href = "https://dev3r3nze.itch.io/spacetraveler"
            rating.childNodes[7].style.display = "initial"
            rating.childNodes[9].style.display = "initial"
            desc.innerHTML = "<p>(Click en la imagen para jugar, todos están hechos por mi)<br/> Tan simple como suena, debes tratar de conseguir tanta puntuación como puedas. La puntuación se consigue de forma automática dependiendo del tiempo que puedas sobrevivir. Cuando se rellene la barra de la energía podrás usar la habilidad de la nave, se trata de una invulnerabilidad durante un breve tiempo en el que podrás atravesar los obstáculos.</p>"
            break;
        case 3:
            title.innerHTML = "<p>Moonthrower</p>"
            image.src = "CapturaLuna.png"
            image.style.width = "90%"
            enlace.href = "https://dev3r3nze.itch.io/moon-thrower"
            rating.childNodes[7].style.display = "initial"
            rating.childNodes[9].style.display = "initial"
            desc.innerHTML = "<p>(Click en la imagen para jugar, todos están hechos por mi)<br/> Lanza la luna tan lejos como puedas en este entretenido juego arcade, esquivando los diversos cuerpos celestes que te encuentres. Gana estrellas y canjéalas por mejoras o elige entre los +10 cosméticos* únicos para hacer a tu Luna la más bonita del universo!</p>"
            break;
        case 4:
            title.innerHTML = "<p>Space Manager</p>"
            image.src = "CapturaManager.png"
            image.style.width = "60%"
            enlace.href = ""
            rating.childNodes[7].style.display = "initial"
            rating.childNodes[9].style.display = "none"
            desc.innerHTML = "<p>Gestiona tu propia lanzadera, compra mejoras, rellena los tanques de combustible y sube de nivel para comprar mejores mejoras y desbloquear habilidades únicas!</p>"
            break;
                    
    }
}