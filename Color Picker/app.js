let colorpicker = document.getElementById("colorpicker");
let colorbox = document.getElementById("colorbox");
let no = document.getElementById("no");


colorpicker.addEventListener('input', (e) => {
    const color = e.target.value;
    colorbox.style.backgroundColor = color;
    no.textContent = color;
});