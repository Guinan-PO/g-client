import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsHomeComponent } from './containers/boards-home/boards-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [BoardsHomeComponent, BoardsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardsHomeComponent,
        children: [
          {
            path: 'list',
            component: BoardsListComponent
          }
        ]
      }
    ])
  ]
})
export class BoardModule {}
