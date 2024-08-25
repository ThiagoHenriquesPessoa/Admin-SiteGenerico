import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaSiteComponent } from "../cria-site/cria-site.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CriaSiteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  options: string[] = ['Opção 1', 'Opção 2', 'Opção 3'];
  selectedOption: string = this.options[0];
  showCriaSite: boolean = false;

  criarSite() {
    this.showCriaSite = true;
  }
}
