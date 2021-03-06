import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ServicesModel } from "../models/our-services.models";
import { URL_SERVICES } from "../config/config";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

const headers = new HttpHeaders({
  "Content-Type": "aplication/json"
});

@Injectable({
  providedIn: "root"
})
export class OurServicesService {
  private dbPath = '/services';
  ourServicesRef: AngularFireList<ServicesModel> = null;

  constructor(
    private http: HttpClient,
    private afDB: AngularFireDatabase) {
    this.ourServicesRef = this.afDB.list(this.dbPath);
  }

  createService(service: ServicesModel) {
    const url = URL_SERVICES + "services.json";
    const body = JSON.stringify(service);
    return this.http.post(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  deleteService(key: string) {
    let url = URL_SERVICES + `services/${key}.json`;
    return this.http.delete(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  updateService(service: ServicesModel, key: string) {
    const body = JSON.stringify(service);
    let url = URL_SERVICES + `services/${key}.json`;
    return this.http.put(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getServicesList() {
    // devuelve toda la lista
    return this.ourServicesRef;
  }

  getServices() {
    let url = URL_SERVICES + `services.json`;
    return this.http.get(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getServiceById(key: string) {
    const url = URL_SERVICES + `services/${key}.json`;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    );

  }
}
