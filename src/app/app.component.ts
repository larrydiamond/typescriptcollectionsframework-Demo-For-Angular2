import { Component } from '@angular/core';
import { ArrayList, LinkedList, HashSet, TreeSet, Hashable, GenericCollectable, GenericHashable, CollectionUtils, ImmutableCollection, JIterator } from 'typescriptcollectionsframework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active:string = "ArrayList";

  alData:ArrayList<string> = new ArrayList<string>(new GenericCollectable<string>());
  llData:LinkedList<string> = new LinkedList<string>(new GenericCollectable<string>());
  hsData:HashSet<string> = new HashSet<string>(new GenericHashable<string>());
  tsData:TreeSet<string> = new TreeSet<string>(CollectionUtils.getStringComparator());

  constructor () {
    this.alData.add ("Cat");
    this.alData.add ("Squirrel");
    this.alData.add ("Dog");

    this.llData.add ("Cat");
    this.llData.add ("Squirrel");
    this.llData.add ("Dog");

    this.hsData.add ("Cat");
    this.hsData.add ("Squirrel");
    this.hsData.add ("Dog");

    for (let iter:JIterator<string> = this.hsData.iterator(); iter.hasNext(); ) {
      console.log (iter.next());
    }

    this.tsData.add ("Cat");
    this.tsData.add ("Squirrel");
    this.tsData.add ("Dog");
  }

  ngOnInit() {
  }

  ArrayList() {
    this.active = "ArrayList";
  }
  LinkedList() {
    this.active = "LinkedList";
  }
  HashSet() {
    this.active = "HashSet";
  }
  TreeSet() {
    this.active = "TreeSet";
  }

  addArrayList(newdata:string) {
    this.alData.add (newdata);
  }
  addLinkedList(newdata:string) {
    this.llData.add (newdata);
  }
  addHashSet(newdata:string) {
    this.hsData.add (newdata);
  }
  addTreeSet(newdata:string) {
    this.tsData.add (newdata);
  }
  removeArrayListEntry(olddata:string) {
    this.alData.removeElement(olddata);
  }
  removeLinkedListEntry(olddata:string) {
    this.llData.removeElement(olddata);
  }
  removeHashSetEntry(olddata:string) {
    this.hsData.remove(olddata);
  }
  removeTreeSetEntry(olddata:string) {
    this.tsData.remove(olddata);
  }
}

export class PetStoreProduct {
  private sku:string;
  private name:string;
  private price:number;

  public getSku():string { return this.sku; }
  public getName():string { return this.name; }
  public getPrice():number { return this.price; }

  public setSku(newsku:string) { this.sku = newsku; }
  public setName(newname:string) { this.name = newname; }
  public setPrice(newprice:number) { this.price = newprice; }
}

export class PetStoreProductHashable implements Hashable<PetStoreProduct> {
  equals (o1: PetStoreProduct, o2: PetStoreProduct) : boolean {
    if (o1 === undefined) {
      if (o2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (o1 === null) {
      if (o2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((o2 === null) || (o2 === undefined)) {
      return false;
    }

    if (JSON.stringify(o1.getSku()) === JSON.stringify(o2.getSku()))
      return true;
    return false;
  };
  hashCode (o:PetStoreProduct) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  };

  getHashCodeForString (o:string) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  }

  getHashCodeForStringArray (o:string[]) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:number = 0;
    for (let loop = 0; loop < o.length; loop++) {
      let ostr:string = o [loop];
      tmp = ((tmp * 256) + this.getHashCodeForString (ostr)) % 1000000000;
    }
    return tmp;
  }

  getHashCodeForStrings (o:ImmutableCollection<string>) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:number = 0;
    for (let iter:JIterator<string> = o.iterator(); iter.hasNext(); ) {
      let ostr:string = iter.next();
      tmp = ((tmp * 256) + this.getHashCodeForString (ostr)) % 1000000000;
    }
    return tmp;
  }

  getHashCodeForNumber (o:number) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }

    let tmp:number = o;
    while ((tmp < 1000000000) && (Math.floor (tmp) === tmp)) {
      tmp = tmp * 10;
    }

    return tmp;
  }
}
