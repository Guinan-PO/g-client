import { Task } from './../../../../shared/Models/Task';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { Situation } from 'src/app/shared/Models/Situation';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-situation-container',
  templateUrl: './situation-container.component.html',
  styleUrls: ['./situation-container.component.css']
})
export class SituationContainerComponent {
  @Input() situationData$: Observable<Situation[]>;

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
}
