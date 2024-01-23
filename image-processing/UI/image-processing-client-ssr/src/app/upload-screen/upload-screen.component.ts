import { Component } from "@angular/core";
import { UploadPictureService } from "./upload-picture.service";

@Component({
    selector: 'upload-screen',
    templateUrl: './upload-screen.component.html',
    styleUrl: './upload-screen.component.scss',
    standalone: true
})
export class UploadScreeenComponent {

    constructor(private imageService: UploadPictureService) {}

    private imageFormData: FormData = new FormData();

    onFileSelect($event: any) {
        const file: File = $event.target.files[0];
        if (file) {
            this.imageFormData.append("image", file);
            console.log(file);
            this.imageService.sendPicture();
        }
    }

}