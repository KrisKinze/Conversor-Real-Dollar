class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    sentencaDeMorte() {
        console.log(`${this.nome} ${this.sobrenome} foi sentenciado a morte!`);
    }
}

class causaDaMorte extends Pessoa { 
    constructor(nome,sobrenome,data,causa){
        super(nome,sobrenome)
        this.data = data
        this.causa = causa
    }

    preverMorte(){
        console.log(`${this.nome} ${this.sobrenome} irá morrer em ${this.data} e sua causa de morte será ${this.causa}`);
    }
}

var Pessoa1 = new causaDaMorte("Gui","Oliveira","23/01/25","Afogamento")
console.log(Pessoa1);
Pessoa1.sentencaDeMorte();
Pessoa1.preverMorte();