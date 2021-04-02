import { TasksService } from './../../../../core/services/tasks/tasks.service';
import { SituationsService } from './../../../../core/services/situations/situations.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import Category from 'src/app/shared/Models/Category';
import { Situation } from 'src/app/shared/Models/Situation';
import { Task } from 'src/app/shared/Models/Task';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {
  public taskSearchInput: FormControl = new FormControl('');
  public selectedTabIndex: number = 0;
  public loadTasks: boolean = false;

  public _categories$ = this.categoriesService.categories$;
  public __categories$: Observable<Category[]> = new Observable();
  public __tasks$: Observable<Task[]> = new Observable();
  // public __situations$: Observable<Situation[]> = new Observable();

  public category: Category;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private situationsService: SituationsService,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.loadInitialCategories();
  }

  public createBoardBtn(): void {
    this.router.navigateByUrl('/boards/new');
  }

  public loadSituations({ index }): void {
    console.log('loadSituations called. Event: ', index);

    this.category = this.categoriesService.categories[index];

    if (!!this.category.situations$) {
      console.log('retornando pq ja existe');
      return;
    }

    this.category.situations$ = this.loadInitialSituations(
      this.category.id
    ).pipe(
      tap((situations) => {
        console.log('situations situations situations');
        situations.map((s) => {
          console.log('aaaaaaaaaaaaaaaaaa', s);
          s.tasks = this.loadInitialTasks(s.id);
        });
      })
    );
  }

  public loadMoreTask(situation_id: number): void {
    this.taskService.page = +1;

    this.__tasks$ = this.taskService.getTasks(situation_id);

    this.loadTasks = true;
  }

  private loadInitialTasks = (situation_id: number): Observable<Task[]> => {
    return this.taskService.getTasks(situation_id);
  };

  private loadInitialSituations = (
    category_id: number
  ): Observable<Situation[]> => {
    return this.situationsService.getSituations(category_id);
  };

  private loadInitialCategories(): Observable<Category[]> | void {
    if (this.categoriesService.categories.length) return;

    this.__categories$ = this.categoriesService.getCategories(0, 15).pipe(
      tap((c) => console.log('carregou as categorias:', c)),
      mergeMap(() => this.categoriesService.categories$)
    );
  }
}
