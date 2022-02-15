class Pregunta {
   constructor(pregunta, respuesta) {
      this.pregunta = pregunta;
      this.respuesta = respuesta;
      // this.elemento = [];
   }

   get elementos() {

      const parr1 = document.createElement("p");
      const parr2 = document.createElement("p");
      parr1.textContent = "Texto de la pregunta es : " + this.pregunta;
      parr2.textContent = "Elemento numnero " + this.respuesta + " selecionado";
      return [parr1, parr2];
   }

}

function eliminar_hojos(parent) {
   while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
   }
};
let posision = 1;
var datos = [];
let proximo = document.querySelector(".proximo");
let pantalla = document.querySelector(".pantalla");
let txt_pregunta1 = document.querySelector("[name=txt_pregunta1]");
// let txt_pregunta2 = document.querySelector("[name=txt_pregunta2]");
let pregunta1 = document.querySelectorAll("[name=pregunta1]");
// let pregunta2 = document.querySelectorAll("[name=pregunta2]");
let objeto = new Pregunta("pregunta 1", "respuesta 1");

// console.log(objeto.pregunta);
// console.log(objeto.respuesta);
// console.log(objeto.elementos);

for (var i = 0; i < objeto.elementos.length; i++) {
   console.log(objeto.elementos[i].textContent);
}

proximo.addEventListener("click",
   function(argument) {

      datos.push(new Pregunta(txt_pregunta1.value, fun_respuesta(pregunta1)));
      // console.log(datos[0]);

      function fun_respuesta(pregunta1) {
         for (var i = 0; i < pregunta1.length; i++) {
            if (pregunta1[i].checked) {
               return pregunta1[i].value;

            }
         }
      }
      eliminar_hojos(pantalla);

      for (var i = 0; i < datos.length; i++) {
         console.log(datos[i].elementos);
         for (var j = 0; j < datos[i].elementos.length; j++) {
            // console.log(datos[i].elementos[j]);
            pantalla.appendChild(datos[i].elementos[j]);
         }
         const division = document.createElement("p");
         division.textContent = "=================================================";
         pantalla.appendChild(division);
      }

   });