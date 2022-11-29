import ArbolBinario from "./arbolBinario.js";
import Calcular from "./calcular.js";

document.getElementById("ingresar").addEventListener("click", () => {
  let expresion = document.getElementById("expresion").value;
  
  if (expresion == "") {
    alert("No se a ingresado ningun dato")
  } else {
    let arbolPre = new ArbolBinario(expresion);
    arbolPre.crearVector();
    arbolPre.preOrder(arbolPre.raiz);

    let arbolPost = new ArbolBinario(expresion);
    arbolPost.crearVector();
    arbolPost.postOrder(arbolPost.raiz);
    

    let resPre = "";
    let resPost = "";

    arbolPre.preOrderArray.forEach(element => resPre += element);
    arbolPost.postOrderArray.forEach(element => resPost += element);

    document.getElementById("preOrder").value = resPre;
    document.getElementById("postOrder").value = resPost;

    document.getElementById("exPreOrder").value = resPre;
    document.getElementById("exPostOrder").value = resPost;
    }
});

document.getElementById("calPreOrder").addEventListener("click", () => {
  let expresion = document.getElementById("exPreOrder").value;
  
    if (expresion == "") {
      alert("No se a ingresado ningun dato")
    } else {
      let cal = new Calcular(expresion)
      
      document.getElementById("resPreOrder").value = cal.calculaPreOrder(expresion);
    }
});

document.getElementById("calPostOrder").addEventListener("click", () => {
  let expresion = document.getElementById("exPostOrder").value;
  
    if (expresion == "") {
      alert("No se a ingresado ningun dato")
    } else {
      let cal = new Calcular(expresion)
      
      document.getElementById("resPostOrder").value = cal.calculaPostOrder(expresion);
    }
});

