import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl ,Validators} from '@angular/forms' 
import { DateFormControl } from '../date-form-control';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
  name : new FormControl('' ,[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]),
  cardNumber : new FormControl('',[
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16)
  ]),
  expiration : new DateFormControl('' ,[
    Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}/)
  ]),
  CVV: new FormControl('' ,[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3)
  ])
  });
  constructor() { console.log(this.cardForm) }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Form has been submitted")
  }

  onResetClick(){
     this.cardForm.reset();
  }
}
