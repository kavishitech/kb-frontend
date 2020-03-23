import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercropComponent } from './usercrop.component';

describe('UsercropComponent', () => {
  let component: UsercropComponent;
  let fixture: ComponentFixture<UsercropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
