import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  //getLeaders(): Observable<Leader[]> {
    //return this.http.get<Leader[]>(baseURL + 'leaders')
      //.pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  // getLeader(id: string): Observable<Leader> {
    // return this.http.get<Leader>(baseURL + 'leaders/' + id)
      // .pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  // getFeaturedLeader(): Observable<Leader> {
    // return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(leaders => leaders[0]))
      // .pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(_id: string): Leader {
    return LEADERS.filter((leader) => (leader._id === _id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
