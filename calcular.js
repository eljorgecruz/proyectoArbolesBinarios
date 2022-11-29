export default class Calcular{
    constructor(expresion){
        this.expresion = expresion;
    }

    calPre(signo, a, b) {
        if(signo == "*"){
            return  a * b;
        }else if(signo == "/"){
            return a / b;
        }else if(signo == "+"){
            return a + b;
        }else if(signo == "-"){
            return a - b;        
        }
    }


    calculaPreOrder(expresion) {
        let exArray = Array.from(expresion)
        let pila = [];
        let res = 0;

        for (let i = exArray.length - 1; i >= 0; i--) {
            if (exArray[i] == '*' || exArray[i] == '-' || exArray[i] == '+' || exArray[i] == '/') {
                let numA = pila.pop();
                let numB = pila.pop();
                
                res += this.calPre(exArray[i], numA, numB);
                
                pila.push(res);
            } else {
                pila.push(exArray[i]);
            }
        }
        return pila;
    }

    calPost(signo, a, b) {
        if(signo == "*"){
            return  b * a;
        }else if(signo == "/"){
            return b / a;
        }else if(signo == "+"){
            return b + a;
        }else if(signo == "-"){
            return b - a;        
        }
    }


    
    calculaPostOrder(expresion) {
        let exArray = Array.from(expresion)
        let cola = new Array;
        let res = 0;

        for (let i = 0; i < exArray.length; i++) {
            if (expresion[i] == '*' || expresion[i] == '-' || expresion[i] == '+' || expresion[i] == '/') {
                let numA = cola.pop();
                let numB = cola.pop();

                res += this.calPost(exArray[i], numA, numB);
            
                cola.push(res);
            }else {
                cola.push(exArray[i]);
            }
        }
    
        return res;
    }
}