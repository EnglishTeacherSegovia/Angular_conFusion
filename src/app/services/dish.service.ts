import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

 //getHTTPDishes(): Observable<Dish[]> {
   //return this.http.get<Dish[]>(baseURL + 'dishes/')
     //.pipe(catchError(this.processHTTPMsgService.handleError));
 // }

 //getHTTPDish(id: string): Observable<Dish> {
   // return this.http.get<Dish>(baseURL + 'dishes/' + id)
     // .pipe(catchError(this.processHTTPMsgService.handleError));
  //}

  //getHTTPFeaturedDish(): Observable<Dish> {
    //return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      //.pipe(catchError(this.processHTTPMsgService.handleError));
  //}

 // getHTTPDishIds(): Observable<number[] | any> {
   // return this.getDishes().pipe(map(dishes => dishes.map(dish => dish._id)))
     // .pipe(catchError(error => error));
 // }
  // getHTTPDishIds(): Observable<number[] | any> {
    // return this.getDishes().pipe(map(dishes => dishes.map(dish => dish._id)))
      // .pipe(catchError(error => error));
 // }

  //postComment(dishId: string, comment: any) {
   // return this.http.post(baseURL + 'dishes/' + dishId + '/comments', comment)
    //.pipe(catchError(this.processHTTPMsgService.handleError));

  // }

  getDishes(): Observable <Dish[]> {
    return of(DISHES);
  }
  getDish(_id: string): Observable<Dish> {
    return of (DISHES.filter((dish) => (dish._id === _id))[0]).pipe(delay(2000));
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
  getDishIds(): Observable <string[] | any> {
    return of(DISHES.map(dish => dish._id ));
  }
}
