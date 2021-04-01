import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/Models/Task';

export interface Situation {
  id?: number;
  name: string;
  category_id?: number;
  tasks?: Observable<Task[]>;
}
