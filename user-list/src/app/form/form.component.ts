import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { book } from '../user/model/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private dialoRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data: book) {
    // console.log(data)
    this.bookForm = this.fb.group({
      image: [data.imageUrl],
      title: [data.title],
      purchaseLink: [data.purchaseLink],
      PublishDate: [data.PublishDate??'']
    })
  }
  save() {
    console.log(this.bookForm.value)
    this.dialoRef.close(this.bookForm.value)
  }
}
