import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

 // getPromotions(): Observable<Promotion[]> {
   // return this.http.get<Promotion[]>(baseURL + 'promotions')
     // .pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  //getPromotion(id: string): Observable<Promotion> {
    //return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      //.pipe(catchError(this.processHTTPMsgService.handleError));
  // }

  //getFeaturedPromotion(): Observable<Promotion> {
    //return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
      //.pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(_id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo._id === _id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
