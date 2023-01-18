function toggle() {
    


    if(document.getElementsByClassName("button")[0].innerHTML === 'More'){
        document.getElementsByClassName("button")[0].innerHTML = 'Less'
        document.getElementById("extra").style.display = "block"
    } else{
        document.getElementsByClassName("button")[0].innerHTML = 'More'
        document.getElementById("extra").style.display = 'none'
    }
}