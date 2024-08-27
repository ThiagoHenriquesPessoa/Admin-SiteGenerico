import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaTelaComponent } from "../cria-tela/cria-tela.component";

@Component({
  selector: 'app-cria-site',
  standalone: true,
  imports: [CommonModule, FormsModule, CriaTelaComponent],
  templateUrl: './cria-site.component.html',
  styleUrl: './cria-site.component.css'
})
export class CriaSiteComponent implements OnInit{
  nomeSite: string = '';
  fontePrimaria: string = '';
  fonteSecundaria: string = '';
  fonteTerciaria: string = '';
  tamanhoFontePrimaria: number = 10;
  tamanhoFonteSecundaria: number = 10;
  tamanhoFonteTerciaria: number = 10;
  corPrimaria: string = '#000000';
  corSecundaria: string = '#000000';
  corTerciaria: string = '#000000';
  rodaPe: boolean = false;
  quantidadeTelas: number = 1;
  telas: string[] = [];

  onSubmit() {
    // Adicione aqui a lógica para salvar os dados do formulário
  }

  ngOnInit() {
    this.updateTelas();
  }

  updateTelas() {
    this.telas = Array(this.quantidadeTelas).fill('');
  }
}
