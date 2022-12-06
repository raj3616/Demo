import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from './types/slide.interface';
import { MatDialog } from '@angular/material/dialog';
import { RformComponent } from '../rform/rform.component'


@Component({
  selector: 'app-imgsilder',
  templateUrl: './imgsilder.component.html',
  styleUrls: ['./imgsilder.component.css']
})
export class ImgsilderComponent implements OnInit, OnDestroy {
  @Input() slides: SlideInterface[] = [];
  constructor(public dialog: MatDialog) { }

  openform() {
    this.dialog.open(RformComponent);
  }

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}

