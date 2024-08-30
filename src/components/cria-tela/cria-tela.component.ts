import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelaDto } from '../../Models/site-dto.model';
import { Base64Service } from '../../app/servicos/base64.service';

@Component({
  selector: 'app-cria-tela',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [Base64Service],
  templateUrl: './cria-tela.component.html',
  styleUrl: './cria-tela.component.css'
})
export class CriaTelaComponent {
  @Input() tela!: TelaDto;
  @Input() index: number = 0;
  @Output() telaChange = new EventEmitter<{ index: number, tela: TelaDto }>();

  habilitaTexto: boolean = false;
  textoUm: string = '';
  textoDois: string = '';
  habilitaImagemEsquerda: boolean = false;
  habilitaImagemDireita: boolean = false;
  imagemEsquerda: File | null = null;
  imagemDireita: File | null = null;

  constructor(private bae64Service: Base64Service) { }

  async emitChange() {
    const imagemEsquerdaBase64: string = this.imagemEsquerda ? await this.bae64Service.convertToBase64(this.imagemEsquerda): '';
    const imagemDireitaBase64: string = this.imagemDireita ? await this.bae64Service.convertToBase64(this.imagemDireita): '';

    this.telaChange.emit({
      index: this.index,
      tela: {
      HabilitaTexto: this.habilitaTexto,
      TextoUm: this.textoUm,
      TextoDois: this.textoDois,
      HabilitaImagemEsquerda: this.habilitaImagemEsquerda,
      HabilitaImagemDireita: this.habilitaImagemDireita,
      ImagemEsquerda: imagemEsquerdaBase64,
      ImagemDireita: imagemDireitaBase64
      }
    });
  }

  async onFileChange(event: Event, side: 'esquerda' | 'direita') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (side === 'esquerda') {
        this.imagemEsquerda = file;
      } else {
        this.imagemDireita = file;
      }
    }
  }

  toggleHabilitaTexto() {
    this.habilitaTexto = false;
  }

  toggleHabilitaImagem() {
    this.habilitaImagemEsquerda = false;
  }
}

