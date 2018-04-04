import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COLLECTION } from '../../../core/collection';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  libelles = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: ['',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER
    });
  }
  process() {
    console.log(this.form.value);
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  isError(champs: string): boolean {
    return this.form.get(champs).invalid && this.form.get(champs).touched;
  }
}
