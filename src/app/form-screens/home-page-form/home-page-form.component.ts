import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { SocialMediaModel } from '../../../models/social-media-model';

@Component({
  selector: 'app-home-page-form',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './home-page-form.component.html',
  styleUrl: './home-page-form.component.scss'
})
export class HomePageFormComponent {
  dialogForm: any;
  constructor(
    public dialogRef: MatDialogRef<HomePageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SocialMediaModel
  ) {}

  ngOnInit() {
    this.dialogForm = new FormGroup({
      link: new FormControl(this.data.link),
      name: new FormControl(this.data.name),
      description: new FormControl(this.data.description)
    });
  }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }
}
