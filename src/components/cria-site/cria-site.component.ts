import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cria-site',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cria-site.component.html',
  styleUrl: './cria-site.component.css'
})
export class CriarSiteComponent {
  options: string[] = ['Opção 1', 'Opção 2', 'Opção 3'];
  selectedOption: string = this.options[0];

  criarSite() {
    console.log('Site criado com a opção:', this.selectedOption);
    // Adicione aqui a lógica para criar o site
  }
}
