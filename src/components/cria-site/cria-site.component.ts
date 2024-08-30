import { HttpService } from '../../app/servicos/http.service';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaTelaComponent } from "../cria-tela/cria-tela.component";
import { HttpClientModule } from '@angular/common/http';
import { SiteDto, TelaDto } from '../../Models/site-dto.model';

@Component({
  selector: 'app-cria-site',
  standalone: true,
  imports: [CommonModule, FormsModule, CriaTelaComponent, HttpClientModule],
  providers: [HttpService],
  templateUrl: './cria-site.component.html',
  styleUrl: './cria-site.component.css'
})

export class CriaSiteComponent implements OnInit{
  nomeSite: string = 'teste';
  corBackground: string = 'arial';
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
  telas: TelaDto[] = [];

  @ViewChildren(CriaTelaComponent) criaTelaComponents!: QueryList<CriaTelaComponent>;

  constructor(private httpService: HttpService) { }

  async ngOnInit() {
    await this.updateTelas();
  }

  async onSubmit(): Promise<void>  {
  this.criaTelaComponents.forEach((component) => component.emitChange());

  const siteDto: SiteDto = {
    NomeSite: this.nomeSite,
    CorBackground: this.corBackground,
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

  await this.httpService.criaSite(siteDto);
}

  async updateTelas(): Promise<void> {
      this.telas = Array(this.quantidadeTelas).fill(null).map(() => ({
      HabilitaTexto: false,
      TextoUm: '',
      TextoDois: '',
      HabilitaImagemEsquerda: false,
      HabilitaImagemDireita: false,
      ImagemEsquerda: '',
      ImagemDireita: ''
    }));
  }

  async handleTelaChange(event: { index: number, tela: any }) {
    this.telas[event.index] = event.tela;
  }

  toggleRodaPe() {
    this.rodaPe = !this.rodaPe;
  }
}
