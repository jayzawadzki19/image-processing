import { Injectable } from "@angular/core";
import { UploadPictureDataService } from "./upload-picture.data-service";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UploadPictureService {
    constructor(private dataService: UploadPictureDataService) {}

    sendPicture(fileName: string, fileData: FormData): Observable<any> {
        return this.dataService.sendPicture(fileName, fileData);
    }

}