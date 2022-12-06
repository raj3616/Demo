import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imgsilder/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides: SlideInterface[] = [
    { url: '/assets/image-1.jpeg', title: 'beach' },
    { url: '/assets/image-2.jpeg', title: 'boat' },
    { url: '/assets/image-3.jpeg', title: 'forest' },
    { url: '/assets/image-4.jpeg', title: 'city' },
    { url: '/assets/image-5.jpeg', title: 'italy' },
  ];

}
