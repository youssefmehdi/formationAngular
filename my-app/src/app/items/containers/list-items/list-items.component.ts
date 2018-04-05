import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/models/item.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  // collection: Item[];
   collection: Observable<Item[]>;
  //  subsribtion: Subscription;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    // this.subsribtion = this.collectionService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
     this.collection = this.collectionService.collection;
  }

  ngOnDestroy() {
    // this.subsribtion.unsubscribe();
  }
}
