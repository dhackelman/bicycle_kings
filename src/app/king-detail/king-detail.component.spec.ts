import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDetailComponent } from './king-detail.component';

describe('KingDetailComponent', () => {
  let component: KingDetailComponent;
  let fixture: ComponentFixture<KingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
