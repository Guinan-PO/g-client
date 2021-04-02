import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Situation } from 'src/app/shared/Models/Situation';

@Component({
  selector: 'app-situation-container',
  templateUrl: './situation-container.component.html',
  styleUrls: ['./situation-container.component.css']
})
export class SituationContainerComponent {
  @Input() situationData$: Observable<Situation[]>;
  @Output() onLoadMoreTasks: EventEmitter<number> = new EventEmitter<number>();

  public drop(event: CdkDragDrop<string[]>) {
    event.previousContainer === event.container
      ? moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      : transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
  }

  public loadMoreTask(situation_id) {
    this.onLoadMoreTasks.emit(situation_id);
  }
}
