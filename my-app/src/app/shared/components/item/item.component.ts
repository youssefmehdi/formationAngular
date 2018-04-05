import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state = State;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }
  changeState(etat: State) {
    this.item.state = etat;
    this.collectionService.update(this.item);
  }
}
