export interface SiteDto {
  NomeSite: string;
  CorBackground: string;
  FontePrimaria: string;
  FonteSecundaria: string;
  FonteTerciaria: string;
  TamanhoFontePrimaria: number;
  TamanhoFonteSecundaria: number;
  TamanhoFonteTerciaria: number;
  CorPrimaria: string;
  CorSecundaria: string;
  CorTerciaria: string;
  BarraSuperior: boolean;
  BarraSuperiorDto: BarraSuperiorDto | null;
  RodaPe: boolean;
  RodaPeDto: RodaPeDto | null;
  QuantidadeTelas: number;
  Telas: TelaDto[];
}

export interface TelaDto {
  HabilitaTexto: boolean;
  TextoUm?: string;
  TextoDois?: string;
  HabilitaImagemEsquerda: boolean;
  HabilitaImagemDireita: boolean;
  ImagemEsquerda?: string;
  ImagemDireita?: string;
}

export interface BarraSuperiorDto {
  TextoEsquerdo?: string;
  TextoDireito?: string;
  Logo?: string;
}

export interface RodaPeDto {
  TextoEsquerdo?: string;
  TextoCentral?: string;
  TextoDireito?: string;
  Logo?: string;
}
