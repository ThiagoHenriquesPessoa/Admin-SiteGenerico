import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() telaChange = new EventEmitter<{ index: number, tela: any }>();

  habilitaTexto: boolean = false;
  textoUm: string = '';
  textoDois: string = '';
  habilitaImagemEsquerda: boolean = false;
  habilitaImagemDireita: boolean = false;
  imagemEsquerda: string = '';
  imagemDireita: string = '';

  toggleHabilitaTexto() {
    this.habilitaTexto = false;
  }

  toggleHabilitaImagem() {
    this.habilitaImagemEsquerda = false;
  }

  emitChange() {
    this.telaChange.emit({
      index: this.index,
      tela: {
        habilitaTexto: this.habilitaTexto,
        textoUm: this.textoUm,
        textoDois: this.textoDois,
        habilitaImagemEsquerda: this.habilitaImagemEsquerda,
        habilitaImagemDireita: this.habilitaImagemDireita,
        imagemEsquerda: this.imagemEsquerda,
        imagemDireita: this.imagemDireita
      }
    });
  }
}

