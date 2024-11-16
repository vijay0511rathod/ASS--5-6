import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from "./first-comp/first-comp.component";
import { SecondcompComponent } from "./secondcomp/secondcomp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstCompComponent, SecondcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstComp';
}
