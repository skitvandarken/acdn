import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaogeralComponent } from './visaogeral.component';

describe('VisaogeralComponent', () => {
  let component: VisaogeralComponent;
  let fixture: ComponentFixture<VisaogeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaogeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaogeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
