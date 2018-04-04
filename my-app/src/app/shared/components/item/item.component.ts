import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state = State;
  constructor() { }

  ngOnInit() {
  }
  changeState(etat: State) {
   this.item.state = etat;
    // TODO appel methode de collection service pour update DB
  }
}
