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
export class CriaSiteComponent {
  nomeSite: string = '';
  fontePrimaria: string = '';
  fonteSecundaria: string = '';
  fonteTerciaria: string = '';
  corPrimaria: string = '#000000';
  corSecundaria: string = '#000000';
  corTerciaria: string = '#000000';

  onSubmit() {
    console.log('Formulário enviado:', {
      nomeSite: this.nomeSite,
      fontePrimaria: this.fontePrimaria,
      fonteSecundaria: this.fonteSecundaria,
      fonteTerciaria: this.fonteTerciaria,
      corPrimaria: this.corPrimaria,
      corSecundaria: this.corSecundaria,
      corTerciaria: this.corTerciaria
    });
    // Adicione aqui a lógica para salvar os dados do formulário
  }
}
