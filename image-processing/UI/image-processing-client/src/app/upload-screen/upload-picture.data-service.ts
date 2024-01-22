import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UploadPictureDataService {
    constructor(private http: HttpClient) {}

    sendPicture() {

        this.http.post("URL", {});
    }

}