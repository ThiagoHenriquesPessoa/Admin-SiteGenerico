import { PostService } from './../../app/servicos/post.service';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaTelaComponent } from "../cria-tela/cria-tela.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cria-site',
  standalone: true,
  imports: [CommonModule, FormsModule, CriaTelaComponent, HttpClientModule],
  providers: [PostService],
  templateUrl: './cria-site.component.html',
  styleUrl: './cria-site.component.css'
})

export class CriaSiteComponent implements OnInit{
  nomeSite: string = 'teste';
  fontePrimaria: string = 'arial';
  fonteSecundaria: string = 'arial';
  fonteTerciaria: string = 'arial';
  tamanhoFontePrimaria: number = 10;
  tamanhoFonteSecundaria: number = 10;
  tamanhoFonteTerciaria: number = 10;
  corPrimaria: string = '#000000';
  corSecundaria: string = '#000000';
  corTerciaria: string = '#000000';
  barraSuperior: boolean = true;
  rodaPe: boolean = true;
  quantidadeTelas: number = 1;
  telas: any[] = [];

  @ViewChildren(CriaTelaComponent) criaTelaComponents!: QueryList<CriaTelaComponent>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.updateTelas();
  }

  onSubmit() {
    this.criaTelaComponents.forEach((component) => component.emitChange());

    const SiteDto = {
      NomeSite: this.nomeSite,
      FontePrimaria: this.fontePrimaria,
      FonteSecundaria: this.fonteSecundaria,
      FonteTerciaria: this.fonteTerciaria,
      TamanhoFontePrimaria: this.tamanhoFontePrimaria,
      TamanhoFonteSecundaria: this.tamanhoFonteSecundaria,
      TamanhoFonteTerciaria: this.tamanhoFonteTerciaria,
      CorPrimaria: this.corPrimaria,
      CorSecundaria: this.corSecundaria,
      CorTerciaria: this.corTerciaria,
      BarraSuperior: this.barraSuperior,
      RodaPe: this.rodaPe,
      QuantidadeTelas: this.quantidadeTelas,
      Telas: this.telas
    };

    this.postService.criaSite(SiteDto).subscribe();
  }

  updateTelas() {
    if (this.quantidadeTelas < 1) {
      this.quantidadeTelas = 1;
    }
    this.telas = Array(this.quantidadeTelas).fill({}).map(() => ({
      habilitaTexto: false,
      textoUm: '',
      textoDois: '',
      habilitaImagemEsquerda: false,
      habilitaImagemDireita: false,
      imagemEsquerda: null,
      imagemDireita: null
    }));
  }

  handleTelaChange(event: { index: number, tela: any }) {
    this.telas[event.index] = event.tela;
  }

  toggleRodaPe() {
    this.rodaPe = !this.rodaPe;
  }
}
