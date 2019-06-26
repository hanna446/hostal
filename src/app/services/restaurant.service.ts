import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { RestaurantModel } from '../models/restaurant.models';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  "Content-Type": "aplication/json"
});

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  
  private dbPath = '/restaurant';
  restaurantRef: AngularFireList<RestaurantModel> = null;

  constructor(
    private http: HttpClient,
    private afDB: AngularFireDatabase) {
    this.restaurantRef = this.afDB.list(this.dbPath);
  }

  createRestaurant(restaurant: RestaurantModel) {
    const url = URL_SERVICES + "restaurant.json";
    const body = JSON.stringify(restaurant);
    return this.http.post(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  deleteRestaurant(key: string) {
    let url = URL_SERVICES + `restaurant/${key}.json`;
    return this.http.delete(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  updateRestaurant(restaurant: RestaurantModel, key: string) {
    const body = JSON.stringify(restaurant);
    let url = URL_SERVICES + `restaurant/${key}.json`;
    return this.http.put(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getRestaurantList() {
    // devuelve toda la lista
    return this.restaurantRef;
  }

  getRestaurant() {
    let url = URL_SERVICES + `restaurant.json`;
    return this.http.get(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getRestaurantById(key: string) {
    const url = URL_SERVICES + `restaurant/${key}.json`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );

  }
 

}
