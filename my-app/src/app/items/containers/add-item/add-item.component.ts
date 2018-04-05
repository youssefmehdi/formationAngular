import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private collectionService: CollectionService,
  private router: Router) { }

  ngOnInit() {
  }
  addItem(item: Item) {
    this.collectionService.add(item);
    this.router.navigate(['/items/list']); // redirect to list page after adding the item
  }
}
