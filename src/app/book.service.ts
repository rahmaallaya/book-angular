import { Injectable } from '@angular/core';
import { Book } from './Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBook():Book[]{
      return [
        { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', categorie: 'roman', prix: 15, quantite: 10, dispo: true, datePublication: '1943-04-06' },
        { id: 2, titre: 'Une brève histoire du temps', auteur: 'Stephen Hawking', categorie: 'science', prix: 20, quantite: 5, dispo: true, datePublication: '2022-03-01' },
        { id: 3, titre: 'L\'Art de la guerre', auteur: 'Sun Tzu', categorie: 'philosophie', prix: 8, quantite: 0, dispo: false, datePublication: '500-01-01' },
        { id: 4, titre: 'La Terre', auteur: 'Émile Zola', categorie: 'roman', prix: 25, quantite: 12, dispo: true, datePublication: '1887-03-01' },
        { id: 5, titre: 'Cosmos', auteur: 'Carl Sagan', categorie: 'science', prix: 30, quantite: 3, dispo: true, datePublication: '1980-01-01' }
      ];
    
  }
}
