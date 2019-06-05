import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ServicesModel } from "../models/our-services.models";
import { URL_SERVICES } from "../config/config";

const headers = new HttpHeaders({
  "Content-Type": "aplication/json"
});

@Injectable({
  providedIn: "root"
})
export class OurServicesService {
  constructor(private http: HttpClient) {}

  createService(service: ServicesModel) {
    const body = JSON.stringify(service);
    const url = URL_SERVICES + "services.json";
    return this.http.post(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  deleteService(key: string) {
    let url = URL_SERVICES + `services/${key}.json`;
    return this.http.delete(url, {headers}).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  updateService(service: ServicesModel, key: string) {
    const body = JSON.stringify(service);
    let url = URL_SERVICES + `services/${key}.json`;
    return this.http.put(url, body, {headers}).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getServices() {
    let url = URL_SERVICES + `services.json`;
    return this.http.get(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
