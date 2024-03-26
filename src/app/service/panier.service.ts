import { Injectable } from '@angular/core';
import { Lignes } from '../models/lignes';
import { Box } from '../models/Box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: Lignes[]

  constructor() {
    this.panier = JSON.parse(localStorage.getItem("panier") ?? "[]")
  }


  //ajoute des box dans le 
  updatePanier(uneBox: Box, qte: number) {
    const index = this.panier.findIndex(ligne => ligne.box.id == uneBox.id);

    if (index > -1) {
      if (qte > 0) {
        this.panier[index].quantite = qte;
      } else {
        this.panier.splice(index, 1);
      }
    } else if (qte > 0) {
      const nouvelleLigne = new Lignes(qte, uneBox);
      this.panier.push(nouvelleLigne);
    }
    localStorage.setItem("panier", JSON.stringify(this.panier))
    console.log(this.panier)
  }

  //elle sert à calculer le prix total de la commande
  getTotalBoxPrice(): number {
    let totalBoxPrice = 0;
  
    this.panier.forEach(ligne => {
      totalBoxPrice += ligne.box.prix * ligne.quantite;
    });
  
    return totalBoxPrice;
  }

}
