import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebusComponent } from './deletebus.component';

describe('DeletebusComponent', () => {
  let component: DeletebusComponent;
  let fixture: ComponentFixture<DeletebusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletebusComponent]
    });
    fixture = TestBed.createComponent(DeletebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
