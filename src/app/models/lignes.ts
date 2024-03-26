import { Box } from "./Box";

export class Lignes {
    quantite: number
    box: Box
    constructor(quantite: number, box: Box ){
        this.quantite = quantite;
        this.box = box
    }

    incrementer(){
        this.quantite+=1;
    }
    decrementer(){
        if(this.quantite-1 >= 0){
          this.quantite-=1;  
        }
        
    }
}