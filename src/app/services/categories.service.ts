import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CategoryModels } from "../models/category.models";
import { URL_SERVICES } from "../config/config";

import { map } from "rxjs/operators";

const headers = new HttpHeaders({
  "Content-Type": "application/json"
});

@Injectable({
  providedIn: "root"
})

export class CategoriesService {
  constructor(private http: HttpClient) { }

  createCategories(category: CategoryModels) {
    const body = JSON.stringify(category); // se convierte el dato puro a json
    let url = URL_SERVICES + "categories.json"; // Aquí se va a enviar el dato
    return this.http.post(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  deleteCategories(key: string) {
    let url = URL_SERVICES + `categories/${key}.json`;
    return this.http.delete(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  updateCategories(category: CategoryModels, key: string) {
    const body = JSON.stringify(category);
    let url = URL_SERVICES + `categories/${key}.json`;
    return this.http.put(url, body, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getCategories() {
    let url = URL_SERVICES + `categories.json`;
    return this.http.get(url, { headers }).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  getCategoryById(key: string) {
    const url = URL_SERVICES + `categories/${key}.json`;
    return this.http.get(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
