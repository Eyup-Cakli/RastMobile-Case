import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        HeaderComponent
    ]
})
export class HomePageComponent {

}
