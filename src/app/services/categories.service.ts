import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CategoryModels } from "../models/category.models";
import { URL_SERVICES } from "../config/config";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  createCategories(category: CategoryModels) {
    const body = JSON.stringify(category);
    let url = URL_SERVICES + "categories.json";
    return this.http.post(url, body).pipe(
      map(resp => {
        console.log(resp);

        return resp;
      })
    );
  }
}
