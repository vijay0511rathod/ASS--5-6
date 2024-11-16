import { Component } from '@angular/core';
import { SecondcompComponent } from "../secondcomp/secondcomp.component";

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [SecondcompComponent],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {

}
