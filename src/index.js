import cipher from './cipher.js';

let count = 0;
const changeIt = () => {
   count++;
   const option1 = document.getElementById("option1");
   const option2 = document.getElementById("option2");
   const show1 = document.getElementById("show1");
   const show2 = document.getElementById("show2");
   const change = document.getElementById("change");
   if (count % 2 !== 0) {
      show1.style.display = "none";
      show2.style.display = "flex";
      change.style.backgroundColor = "#45FF16";
      option1.innerHTML = "CIFRADO";
      option2.innerHTML = "MENSAJE";
   } else {
      show1.style.display = "flex";
      show2.style.display = "none";
      change.style.backgroundColor = "#E71919";
      option1.innerHTML = "MENSAJE",
         option2.innerHTML = "CIFRADO";
   }
}

const change = document.getElementById("change");
change.addEventListener("click", changeIt);



const show1 = document.getElementById("show1");
const second = document.getElementById("second");

show1.addEventListener("click", () => {
   const numero = document.getElementById("numberSelected").value;
   const cadena = document.getElementById("first").value;
   second.value = cipher.encode(numero, cadena);
});

const show2 = document.getElementById("show2");
show2.addEventListener("click", () => {
   const numero = document.getElementById("numberSelected").value;
   const cadena = document.getElementById("first").value;
   second.value = cipher.decode(numero, cadena);
});