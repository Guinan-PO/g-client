import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsHomeComponent } from './boards-home.component';

describe('BoardsHomeComponent', () => {
  let component: BoardsHomeComponent;
  let fixture: ComponentFixture<BoardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
