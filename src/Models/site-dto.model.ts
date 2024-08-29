export interface TelaDto {
  HabilitaTexto: boolean;
  TextoUm?: string;
  TextoDois?: string;
  HabilitaImagemEsquerda: boolean;
  HabilitaImagemDireita: boolean;
  ImagemEsquerda?: string;
  ImagemDireita?: string;
}

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
  RodaPe: boolean;
  QuantidadeTelas: number;
  Telas: TelaDto[];
}
