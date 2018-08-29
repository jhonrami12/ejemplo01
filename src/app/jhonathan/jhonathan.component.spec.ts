import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhonathanComponent } from './jhonathan.component';

describe('JhonathanComponent', () => {
  let component: JhonathanComponent;
  let fixture: ComponentFixture<JhonathanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhonathanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhonathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
