import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SearchComponent } from "../search/search.component";
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, MainContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
