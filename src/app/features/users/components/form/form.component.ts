import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /* name = new FormControl('hacode'); */

  @Output() dataUser = new EventEmitter<object>();

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    aboutme: new FormControl('', Validators.required)
  })

  constructor() {

    /* this.name.valueChanges.subscribe((value) => {
        console.log('value',value);
       console.log('name',this.name); })*/

    this.userForm.controls.firstName.valueChanges.subscribe((value) => {
      console.log('value', value);
      console.log('name', this.userForm.controls.firstName);
    })

    console.log(this.userForm);
  }

  ngOnInit(): void { }
  onSubmit(): void {
   this.dataUser.emit(this.userForm.value);
  }
}

