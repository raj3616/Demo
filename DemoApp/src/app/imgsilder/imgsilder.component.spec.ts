import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgsilderComponent } from './imgsilder.component';

describe('ImgsilderComponent', () => {
  let component: ImgsilderComponent;
  let fixture: ComponentFixture<ImgsilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgsilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgsilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
