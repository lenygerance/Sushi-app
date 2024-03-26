import { Component } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { Lignes } from '../../models/lignes';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
panier:Array<Lignes>
  constructor(private panierService:PanierService){
    this.panier=panierService.panier
  }

  getTotalBoxPrice(){
    return this.panierService.getTotalBoxPrice()
  }
}
