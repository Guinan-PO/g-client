import { Situation } from './Situation';
import { Observable } from 'rxjs';

export interface Category {
  id?: number;
  name_category: string;
  id_user?: number;
  situations$: Observable<Situation[]>;
}
