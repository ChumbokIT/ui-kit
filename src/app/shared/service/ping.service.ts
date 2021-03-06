import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class PingService {

  abstract ping(): Observable<any>;

}
