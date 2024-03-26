export class Box {
    id: number = 0;
    nom: string = "";
    prix: number = 0.0;
    nbPieces: number = 0;
    image: string = "";
    saveurs: [] = []
    aliments: { id: number, nom: string }[] = [];
}
