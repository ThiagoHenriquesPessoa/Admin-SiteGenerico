import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cria-tela',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cria-tela.component.html',
  styleUrl: './cria-tela.component.css'
})
export class CriaTelaComponent {
  @Input() tela: string = '';
  @Input() index: number = 0;
}
