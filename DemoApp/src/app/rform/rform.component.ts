import { FormControl, FormGroup, Validators } from '@angular/forms'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { firstValueFrom, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JsonserviceService } from '../Json/jsonservice.service'
import { LocalServiceService } from '../local-service.service';
import { Router } from '@angular/router';

export class formval {
  Photo?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Number: number;
  Slider: number;
  State: string;
  Country: string;
  Address: any;
  Tags: any[];
  Check: boolean;
}

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor(private usersave: JsonserviceService, private _LocalServiceService: LocalServiceService, private _router: Router) {

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.DemoForm.patchValue({
      State: '0',
      Country: '0',
      Check: false
    });
  }

  DemoForm = new FormGroup({
    Photo: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(20)]),
    Number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    Slider: new FormControl(0, [Validators.required]),
    State: new FormControl('', [Validators.required]),
    Country: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    Tags: new FormControl('', [Validators.required]),
    Check: new FormControl(false, [Validators.required]),
  })


  imgpath = "../../assets/profile.jpeg";
  onselect(event) {
    if (event.target.files) {
      let read = new FileReader();
      read.readAsDataURL(event.target.files[0]);
      read.onload = (event: any) => {
        this.imgpath = event.target.result;
        console.log(event)
      };
    }
  }

  submitdata() {
    //console.warn(this.DemoForm.value);
    //this.usersave.savealluser(this.DemoForm.value).subscribe((response) => {
    //  console.log(response);
    //});
    this._LocalServiceService.savealluser(this.DemoForm.value);
    this._router.navigate(['userprofile']);
  }

  get photo() {
    return this.DemoForm.get('Photo')
  }
  get fname() {
    return this.DemoForm.get('FirstName')
  }
  get lname() {
    return this.DemoForm.get('LastName')
  }
  get useremail() {
    return this.DemoForm.get('Email')
  }
  get pnumber() {
    return this.DemoForm.get('Number')
  }
  get slider() {
    return this.DemoForm.get('Slider')
  }
  get state() {
    return this.DemoForm.get('State')
  }
  get country() {
    return this.DemoForm.get('Country')
  }
  get address() {
    return this.DemoForm.get('Address')
  }
  get tag() {
    return this.DemoForm.get('Tags')
  }
  get check() {
    return this.DemoForm.get('Check')
  }


}
