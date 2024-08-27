import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaTelaComponent } from "../cria-tela/cria-tela.component";
import { HttpClient } from '@angular/common/http';

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
  barraSuperior: boolean = true;
  rodaPe: boolean = true;
  quantidadeTelas: number = 1;
  telas: string[] = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    const dadosFormulario = {
      nomeSite: this.nomeSite,
      fontePrimaria: this.fontePrimaria,
      fonteSecundaria: this.fonteSecundaria,
      fonteTerciaria: this.fonteTerciaria,
      tamanhoFontePrimaria: this.tamanhoFontePrimaria,
      tamanhoFonteSecundaria: this.tamanhoFonteSecundaria,
      tamanhoFonteTerciaria: this.tamanhoFonteTerciaria,
      corPrimaria: this.corPrimaria,
      corSecundaria: this.corSecundaria,
      corTerciaria: this.corTerciaria,
      barraSuperior: this.barraSuperior,
      rodaPe: this.rodaPe,
      quantidadeTelas: this.quantidadeTelas,
      telas: this.telas
    };

    this.http.post('https://sua-api.com/endpoint', dadosFormulario).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso!', response);
        // Aqui, você pode tratar a resposta da API conforme necessário
      },
      (error) => {
        console.error('Erro ao enviar dados:', error);
        // Trate o erro de acordo com a sua lógica
      }
    );
  }

  ngOnInit() {
    this.updateTelas();
  }

  updateTelas() {
    if (this.quantidadeTelas < 1) {
      this.quantidadeTelas = 1;
    }
    this.telas = Array(this.quantidadeTelas).fill('');
  }

  toggleRodaPe() {
    this.rodaPe = !this.rodaPe;
  }
}
