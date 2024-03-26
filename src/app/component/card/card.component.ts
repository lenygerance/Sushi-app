import { Component, Input } from '@angular/core';
import { Box } from '../../models/Box';
import { PanierService } from '../../service/panier.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  box: Box | undefined
  qte: number 
  afficheDetail=false
nbPiece: any;

  constructor(private panierService: PanierService) {
    //Etape 1 : recuperer les ligne du panier
    //Etape 2 : Parcourir chaque le panier
    //Etape Vérifier si l'id de la box corespond a la l'id de la  box de la ligne
    // Si oui : qte = a la qte de la ligne
    this.qte=0
  }

  incrementer() {
      this.qte++;
      this.panierService.updatePanier(this.box!, this.qte)

  }

  decrementer() {
    if(this.qte > 0){
      this.qte-- 
    }
    console.log("enleve")
    
    this.panierService.updatePanier(this.box!, this.qte)

  }

  changeDetail(surImage:boolean){
    this.afficheDetail=surImage
  }

}
