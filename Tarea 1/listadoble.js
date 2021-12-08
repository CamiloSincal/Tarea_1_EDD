class nodo{
    constructor(dato){
        this.dato = dato
        this.siguiente = null
        this.anterior = null
    }
}

class listaDobleCircular{
    constructor(){
        this.primero = null
    }

    insertar(dato){
        let nuevo = new nodo(dato)

        if(this.primero == null){
            this.primero = nuevo
            this.primero.siguiente = this.primero
            this.primero.anterior = this.primero
        }else{
            let primerDato = this.primero
            let aux = this.primero
            while(aux.siguiente != primerDato){
                aux = aux.siguiente
            }
            
            aux.siguiente = nuevo
            nuevo.anterior = aux
            primerDato.anterior = nuevo
            nuevo.siguiente = primerDato
        }
    }

    mostrar(){
        let auxiliar = this.primero

        while(auxiliar != null){
            console.log("->" + auxiliar.dato)
            auxiliar = auxiliar.siguiente
        }
    }
}

let listaD = new listaDobleCircular()
listaD.insertar(6)
listaD.insertar(2)
listaD.insertar(8)
listaD.insertar(1)
listaD.mostrar()