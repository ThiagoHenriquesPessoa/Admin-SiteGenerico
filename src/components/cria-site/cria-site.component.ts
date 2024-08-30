import { HttpService } from '../../app/servicos/http.service';
import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriaTelaComponent } from "../cria-tela/cria-tela.component";
import { HttpClientModule } from '@angular/common/http';
import { BarraSuperiorDto, RodaPeDto, SiteDto, TelaDto } from '../../Models/site-dto.model';
import { RodapeComponent } from "../rodape/rodape.component";
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";

@Component({
  selector: 'app-cria-site',
  standalone: true,
  imports: [CommonModule, FormsModule, CriaTelaComponent, HttpClientModule, RodapeComponent, BarraSuperiorComponent],
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
  barraSuperior: boolean = false;
  barraSuperiorDto: BarraSuperiorDto | null = null;
  rodaPe: boolean = false;
  rodaPeDto: RodaPeDto | null = null;
  quantidadeTelas: number = 1;
  telas: TelaDto[] = [];

  @ViewChildren(CriaTelaComponent) criaTelaComponents!: QueryList<CriaTelaComponent>;
  @ViewChild(BarraSuperiorComponent) barraSuperiorComponent!: BarraSuperiorComponent;
  @ViewChild(RodapeComponent) rodapeComponent!: RodapeComponent;

  constructor(private httpService: HttpService) { }

  async ngOnInit() {
    await this.updateTelas();
    await this.updateBarraSuperior();
    await this.updateRodaPe();
  }

  async onSubmit(): Promise<void>  {
    this.criaTelaComponents.forEach((component) => component.emitChange());
    this.rodapeComponent.emitChange();

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
      BarraSuperiorDto: this.barraSuperiorDto,
      RodaPe: this.rodaPe,
      RodaPeDto: this.rodaPeDto,
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

  async updateBarraSuperior(): Promise<void> {
    this.barraSuperiorDto = {
      TextoEsquerdo: '',
      TextoDireito: '',
      Logo: ''
    };
  }

  async updateRodaPe(): Promise<void> {
    this.rodaPeDto = {
      TextoEsquerdo: '',
      TextoCentral: '',
      TextoDireito: '',
      Logo: ''
    };
  }

  async handleTelaChange(event: { index: number, tela: any }) {
    this.telas[event.index] = event.tela;
  }

  async handleRodaPeChange(event: { rodaPe: RodaPeDto }) {
    this.rodaPeDto = event.rodaPe;
  }

  toggleRodaPe() {
    this.rodaPe = !this.rodaPe;
  }
}
