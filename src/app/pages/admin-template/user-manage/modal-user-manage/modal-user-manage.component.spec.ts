import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserManageComponent } from './modal-user-manage.component';

describe('ModalUserManageComponent', () => {
  let component: ModalUserManageComponent;
  let fixture: ComponentFixture<ModalUserManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUserManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
