import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Mehdi',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Majdi',
    reference: '1235',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Sarra',
    reference: '1234',
    state: State.LIVRE
  }
];
