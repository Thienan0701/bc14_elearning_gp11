import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFromMenuComponent } from './courses-from-menu.component';

describe('CoursesFromMenuComponent', () => {
  let component: CoursesFromMenuComponent;
  let fixture: ComponentFixture<CoursesFromMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesFromMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFromMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
