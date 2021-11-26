import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubscribeCourseComponent } from './modal-subscribe-course.component';

describe('ModalSubscribeCourseComponent', () => {
  let component: ModalSubscribeCourseComponent;
  let fixture: ComponentFixture<ModalSubscribeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubscribeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubscribeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
