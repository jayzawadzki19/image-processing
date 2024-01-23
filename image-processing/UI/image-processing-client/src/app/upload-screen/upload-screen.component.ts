import { Component } from "@angular/core";
import { UploadPictureService } from "./upload-picture.service";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'upload-screen',
    templateUrl: './upload-screen.component.html',
    styleUrl: './upload-screen.component.scss',
    standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule
    ]
})
export class UploadScreeenComponent {

    constructor(private imageService: UploadPictureService) {}

    private imageFormData: FormData = new FormData();
    loadedFile: File;

    onFileSelect($event: any) {
        this.loadedFile = $event.target.files[0];
        if (this.loadedFile) {
            this.imageFormData.append("image", this.loadedFile);
            console.log(this.loadedFile);
            this.imageService.sendPicture();
        }
    }

}