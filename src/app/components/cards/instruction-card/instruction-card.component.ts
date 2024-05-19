import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-instruction-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './instruction-card.component.html',
  styleUrl: './instruction-card.component.css'
})
export class InstructionCardComponent {

}
