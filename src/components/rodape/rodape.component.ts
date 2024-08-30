import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RodaPeDto } from '../../Models/site-dto.model';
import { Base64Service } from '../../app/servicos/base64.service';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [Base64Service],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})

export class RodapeComponent{
  @Output() rodaPeChange = new EventEmitter<{ rodaPe: RodaPeDto }>();

  textoEsquerdo: string = '';
  textoCentral: string = '';
  textoDireito: string = '';
  logo: File | null = null;

  constructor(private bae64Service: Base64Service) { }

  async emitChange() {
    const logoBase64: string = this.logo ? await this.bae64Service.convertToBase64(this.logo): '';

    this.rodaPeChange.emit({
      rodaPe: {
        TextoEsquerdo: this.textoEsquerdo,
        TextoCentral: this.textoCentral,
        TextoDireito: this.textoDireito,
        Logo: logoBase64,
      }
    });
  }

  async onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.logo = file;
    }
  }
}
