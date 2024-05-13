import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home-page-form',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './home-page-form.component.html',
  styleUrl: './home-page-form.component.scss'
})
export class HomePageFormComponent {

}
