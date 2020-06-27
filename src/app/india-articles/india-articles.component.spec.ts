import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaArticlesComponent } from './india-articles.component';

describe('IndiaArticlesComponent', () => {
  let component: IndiaArticlesComponent;
  let fixture: ComponentFixture<IndiaArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
