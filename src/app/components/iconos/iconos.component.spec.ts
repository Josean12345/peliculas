import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosComponent } from './iconos.component';

describe('IconosComponent', () => {
  let component: IconosComponent;
  let fixture: ComponentFixture<IconosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconosComponent]
    });
    fixture = TestBed.createComponent(IconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
