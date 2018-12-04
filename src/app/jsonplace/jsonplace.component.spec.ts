import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONPLACEComponent } from './jsonplace.component';

describe('JSONPLACEComponent', () => {
  let component: JSONPLACEComponent;
  let fixture: ComponentFixture<JSONPLACEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONPLACEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONPLACEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
