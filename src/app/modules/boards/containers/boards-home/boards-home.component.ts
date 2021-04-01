import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { LoadingService } from './../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Category from 'src/app/shared/Models/Category';

@Component({
  selector: 'app-boards-home',
  templateUrl: './boards-home.component.html',
  styleUrls: ['./boards-home.component.css']
})
export class BoardsHomeComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.isLoading$;
  }

  ngOnInit(): void {}
}
