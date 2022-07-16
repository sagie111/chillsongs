const input = document.querySelector('input');
const storageInput = localStorage.getItem('name__!')


let x = "";


if (storageInput) {
    
    window.location.href = "chillsongs.netlify.app/client"
}
else {

input.addEventListener('input', letter => {
    x = letter.target.value;
    
})


function myfunction(){
    if (input.value.length >= 4 & input.value.length <= 18){
        localStorage.setItem('name__!', x);
        window.location.reload();
    }
    else {
        alert("You need a minimum of 4 characters!!! 😡")
    }
}

}
