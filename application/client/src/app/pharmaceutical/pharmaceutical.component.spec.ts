import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaceuticalComponent } from './pharmaceutical.component';

describe('PharmaceuticalComponent', () => {
  let component: PharmaceuticalComponent;
  let fixture: ComponentFixture<PharmaceuticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaceuticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaceuticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
