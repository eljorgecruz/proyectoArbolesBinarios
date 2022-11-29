class Nodo {
  constructor(num) {
    this.num = num;
    this.izq = null;
    this.der = null;
    this.sig = null;
    this.ant = null;
  }
}

export default class ArbolBinario {
  constructor(expresion) {
    this.expresion = expresion;
    this.primero = null;
    this.raiz = null;

    this.preOrderArray = [];
    this.postOrderArray = [];
  }
  
  crearVector() {
    let exArray = Array.from(this.expresion);

    for (let i = 0; i < exArray.length; i++) {
      let nodo = new Nodo(exArray[i]);
      this.agregar(nodo);
    }

  
    return this.crearArbol();
  }
  
  crearArbol() {
    let aux = this.primero;
    while (aux) {
      if (aux.num == "/") {
        aux.der = aux.sig;
        aux.izq = aux.ant;

        this.extraer(aux.ant);
        this.extraer(aux.sig);
      } else if(aux.num == "*") {
        aux.der = aux.sig;
        aux.izq = aux.ant;

        this.extraer(aux.ant);
        this.extraer(aux.sig);
      }

      aux = aux.sig;
    }

    aux = this.primero;
    while (aux) {
      if (aux.num == "+" ) {
          aux.izq = aux.ant;
          aux.der = aux.sig;
          this.extraer(aux.ant);
          this.extraer(aux.sig);
      }else if (aux.num == "-") {
        aux.der = aux.sig;
        aux.izq = aux.ant;
  
        this.extraer(aux.ant);
        this.extraer(aux.sig);
      }

      aux = aux.sig;
    }
        
    this.raiz = this.primero;
    return this.raiz;
  }

  agregar(nodo){
    if (this.primero == null){
      this.primero = nodo
    } else {
      let aux = this.primero
      while(aux.sig != null){
        aux = aux.sig

      }
      aux.sig = nodo
      nodo.ant = aux
    }
  }

  extraer(nodo){
    let aux = null;
    let temp = this.primero;
    while(temp.sig != null) {
      temp = temp.sig;
      if(this.primero == nodo) {
        aux = this.primero;
        this.primero = this.primero.sig;
      }else if (temp == nodo) {
        aux = temp;
        aux.ant.sig = aux.sig;
        aux.sig = null;
        aux.ant = null;
        return aux;
      }
    }
    return null;
  }

 
  preOrder(nodo) {
    let L1 = this.preOrderArray.length;
    if (nodo != null) {
      this.preOrderArray.push(nodo.num);
      this.preOrder(nodo.izq);
      this.preOrder(nodo.der);
    } else if (this.preOrderArray[L1 - 1] == null) {
      this.preOrderArray.splice();
    }
  
    return this.preOrderArray;
  }
  
  postOrder(nodo) {
    let L2 = this.postOrderArray.length;
    if (nodo != null) {
      this.postOrder(nodo.izq);
      this.postOrder(nodo.der);
      this.postOrderArray.push(nodo.num);
    } else if (this.postOrderArray[L2 - 1] == null) {
      this.postOrderArray.splice();
    }
  
    return this.postOrderArray;
  }
}
