import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "./api-utils";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UploadPictureDataService {
    constructor(private http: HttpClient) {}

    sendPicture(fileName: string, fileData: FormData): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.put(`${API_URL}/${fileName}`, fileData, {headers: headers});
    }

}