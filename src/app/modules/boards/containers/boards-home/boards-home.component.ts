import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './../../services/loading/loading.service';

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
