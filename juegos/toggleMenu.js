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
})