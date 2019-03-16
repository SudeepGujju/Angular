import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlyHomeComponent } from './vidly-home.component';

describe('VidlyHomeComponent', () => {
  let component: VidlyHomeComponent;
  let fixture: ComponentFixture<VidlyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidlyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidlyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
