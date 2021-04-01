import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationContainerComponent } from './situation-container.component';

describe('SituationContainerComponent', () => {
  let component: SituationContainerComponent;
  let fixture: ComponentFixture<SituationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
