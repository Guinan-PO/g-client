import { TasksService } from './../../../../core/services/tasks/tasks.service';
import { SituationsService } from './../../../../core/services/situations/situations.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import Category from 'src/app/shared/Models/Category';
import { Situation } from 'src/app/shared/Models/Situation';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {
  public taskSearchInput: FormControl = new FormControl('');
  public selectedTabIndex: number = 0;

  public _categories$ = this.categoriesService.categories$;
  public __categories$ = new Observable();

  public _situations$: Observable<Observable<Situation[]>> = new Observable();

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private situationsService: SituationsService,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.__categories$ = this.categoriesService
      .getCategories(0, 15)
      .pipe(tap((c) => console.log('carregou as categorias:', c)));
  }

  public createBoardBtn() {
    this.router.navigateByUrl('/boards/new');
  }

  public loadSituations($event) {
    console.log('loadSituations called. Event: ', $event);

    const category: Category = this.categoriesService.categories[$event.index];

    if (!!category.situations$) {
      console.log('retornando pq ja existe');
      return;
    }

    this._situations$ = this._categories$.pipe(
      map((categories) => {
        console.log('categories map teste', categories);
        console.log('categories map teste', categories[$event.index]);

        categories[
          $event.index
        ].situations$ = this.situationsService.getSituations(category.id).pipe(
          tap((situations) => {
            situations.map((s) => {
              console.log('tasks', s);
              s.tasks = this.taskService.getTasks(s.id, 0, 15);
            });
          })
        );

        return categories[$event.index].situations$;
      })

      // mergeMap((categories) => {
      //   console.log('categories mergeMap', categories);

      //   categories.map((category) => {
      //     console.log('category map', category);

      //     if (category != categories[$event.index]) return;

      //     categories[
      //       $event.index
      //     ].situations$ = this.situationsService
      //       .getSituations($event.index + 1)
      //       .pipe(
      //         // tap((sitautions) => console.log('situations:', sitautions)),
      //         tap((situations) =>
      //           situations.map((s) => {
      //             s.tasks = this.taskService.getTasks(s.id, 0, 15);
      //           })
      //         )
      //       );
      //   });
      //   return categories[$event.index].situations$;
      // })
      // console.log('chegou aqui no category2: ', categories[$event.index]);
    );
  }
}
