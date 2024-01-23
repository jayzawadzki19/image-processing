import { Injectable } from "@angular/core";
import { UploadPictureDataService } from "./upload-picture.data-service";

@Injectable({providedIn: 'root'})
export class UploadPictureService {
    constructor(private dataService: UploadPictureDataService) {}

    sendPicture() {
        this.dataService.sendPicture();
    }

}