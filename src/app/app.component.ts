import { Component } from '@angular/core';
import { JSet, ArrayList, LinkedList, HashSet, TreeSet, Hashable, AllFieldCollectable, AllFieldHashable, Collections, ImmutableCollection, JIterator } from 'typescriptcollectionsframework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active:string = "ArrayList";

  alData:ArrayList<string> = new ArrayList<string>(new AllFieldCollectable<string>());
  llData:LinkedList<string> = new LinkedList<string>(new AllFieldCollectable<string>());
  hsData:HashSet<string> = new HashSet<string>(new AllFieldHashable<string>());
  tsData:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());

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
    this.alData.remove(olddata);
  }
  removeLinkedListEntry(olddata:string) {
    this.llData.remove(olddata);
  }
  removeHashSetEntry(olddata:string) {
    this.hsData.remove(olddata);
  }
  removeTreeSetEntry(olddata:string) {
    this.tsData.remove(olddata);
  }

  exercise (victim:JSet<string>) {
    let control:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable<string>(), victim);
    let foundbug:boolean = false;
    let numberofactions = 0;
    while (foundbug === false) {
      if (numberofactions >= 100000)
        foundbug = true;
      numberofactions = numberofactions + 1;
      let offset:number = Math.floor (Math.random() * control.size());
      let predelete:string = control.get (offset);

      if (victim.contains (predelete) === false) {
        console.log ("set was supposed to contain " + predelete);
        foundbug = true;
      } else {
        control.removeIndex (offset);
        let presize = victim.size ();
        if (victim.remove (predelete) === false) {
          console.log ("set could not remove " + predelete);
          foundbug = true;
        } else {
          let loop:number = 0;
          for (let iter:JIterator<string> = victim.iterator(); ((foundbug === false) && (iter.hasNext())); loop = loop + 1) {
            let t:string = iter.next ();
            if (loop > presize) {
              foundbug = true;
              console.log ("iterate forever post remove " + predelete);
            }
          }
          let postsize = victim.size ();
          if (postsize >= presize) {
            foundbug = true;
            console.log ("size is now " + postsize + " and was " + presize);
          }

          console.log ("removed " + predelete);

          let c1:number = Math.floor (Math.random() * 26) + 1;
          let c2:number = Math.floor (Math.random() * 26) + 1;
          let c3:number = Math.floor (Math.random() * 26) + 1;
          let c4:number = Math.floor (Math.random() * 26) + 1;
          let c5:number = Math.floor (Math.random() * 26) + 1;

          let added:boolean = false;
          while (added === false) {
            let add:string = String.fromCharCode (96 + c1) + String.fromCharCode (96 + c2) + String.fromCharCode (96 + c3) + String.fromCharCode (96 + c4) + String.fromCharCode (96 + c5);
            if (victim.contains (add) === false) {
              victim.add (add);
              control.add (add);
              added = true;
              console.log ("added " + add + " " + numberofactions);
            }
          }
        }
      }
    }
  }

  exerciseHashSet() {
    this.exercise (this.hsData);
  }

  exerciseTreeSet() {
    this.exercise (this.tsData);
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
