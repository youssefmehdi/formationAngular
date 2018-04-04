import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }
}
