import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercropDetailComponent } from './usercrop-detail.component';

describe('UsercropDetailComponent', () => {
  let component: UsercropDetailComponent;
  let fixture: ComponentFixture<UsercropDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercropDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercropDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
