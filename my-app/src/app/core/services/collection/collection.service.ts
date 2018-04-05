import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;
  constructor(private afs: AngularFirestore, private httpClient: HttpClient) {
    this.itemsCollection = afs.collection<Item>('collection'); // le nom dans la base de données
    this._collection = this.itemsCollection.valueChanges();
    // this._collection = this.httpClient.get('url_api/collection');
  }
  /*
  * get collection
  **/
  get collection(): Observable<Item[]> {
    return this._collection;
  }
/**
 *  set collection
 */
  set collection(items: Observable<Item[]>) {
    this._collection = items;
  }

  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }
}
