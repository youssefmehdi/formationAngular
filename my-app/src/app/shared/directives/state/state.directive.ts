import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() { }

  ngOnChanges() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  removeAccent(etat: string): string {
    return etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  formatClass(str: string): string {
    return `state-${this.removeAccent(str.toLowerCase().replace(' ', ''))}`;
  }
}
