import { Component } from '@angular/core';
import { ArrayList } from 'typescriptcollectionsframework';
import { Collection } from 'typescriptcollectionsframework';
import { Collectable } from 'typescriptcollectionsframework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TypeScript Collections Framework example Angular 2 application';
  petStoreProducts:Collection<PetStoreProduct> = new ArrayList<PetStoreProduct>();

  constructor () {

  }

  ngOnInit() {
    console.log ("ngOnInit");

    let product1:PetStoreProduct = new PetStoreProduct("Catnip", 4.99);
    let product2:PetStoreProduct = new PetStoreProduct("ChewToy", 14.99);
    let product3:PetStoreProduct = new PetStoreProduct("Goldfish", 9.99);

    this.petStoreProducts.add(product1);
    this.petStoreProducts.add(product2);
    this.petStoreProducts.add(product3);
  }
}

class PetStoreProduct implements Collectable {
  public productName:string;
  public price:number;

  constructor (iName:string, iPrice:number) {
    this.productName = iName;
    this.price = iPrice;
  }

  equals (t:any) : boolean {
    if (JSON.stringify(this) === JSON.stringify(t))
      return true;
    return false;
  };
};
