import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomsModel } from '../models/rooms.models';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  createRoom(room: RoomsModel) {
    const body = JSON.stringify(room);
    const url = URL_SERVICES + 'rooms.json';
    return this.http.post(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );

  }

  deleteRoom(key: string) {
    let url = URL_SERVICES + `rooms/${key}.json`;
    return this.http.delete(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  updateRoom(room: RoomsModel, key: string) {
    const body = JSON.stringify(room);
    let url = URL_SERVICES + `rooms/${key}.json`;
    return this.http.put(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getRoom() {
    let url = URL_SERVICES + `rooms.json`;
    return this.http.get(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getRoomById(key: string) {
    const url = URL_SERVICES + `rooms/${key}.json`;
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
