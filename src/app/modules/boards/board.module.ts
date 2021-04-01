import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsHomeComponent } from './containers/boards-home/boards-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BoardsListComponent } from './containers/boards-list/boards-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardComponent } from './components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateBoardComponent } from './containers/create-board/create-board.component';
import { CreateBoardFormComponent } from './components/create-board-form/create-board-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SituationContainerComponent } from './components/situation-container/situation-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    BoardsHomeComponent,
    BoardsListComponent,
    CardComponent,
    CreateBoardComponent,
    CreateBoardFormComponent,
    SituationContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    DragDropModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardsHomeComponent,
        children: [
          {
            path: '',
            component: BoardsListComponent
          },
          {
            path: 'new',
            component: CreateBoardComponent
          }
        ]
      }
    ])
  ]
})
export class BoardModule {}
