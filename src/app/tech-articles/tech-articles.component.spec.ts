import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechArticlesComponent } from './tech-articles.component';

describe('TechArticlesComponent', () => {
  let component: TechArticlesComponent;
  let fixture: ComponentFixture<TechArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
