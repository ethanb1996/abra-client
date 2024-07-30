import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.scss'
})
export class PlaceDetailComponent implements OnInit {
  placeForm: FormGroup<{
    name: FormControl<string | null>;
    type: FormControl<string | null>;
    address: FormControl<string | null>;
  }>;

  constructor(private formBuilder: FormBuilder) {
    this.placeForm = this.formBuilder.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      address: ['',Validators.required]
    })
  }

  ngOnInit(): void {

  }
  createPlace() {
    console.log(this.placeForm.value)
  }
}
