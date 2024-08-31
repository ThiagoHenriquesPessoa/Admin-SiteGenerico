import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraSuperiorDto } from '../../Models/site-dto.model';
import { Base64Service } from '../../app/servicos/base64.service';


@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [Base64Service],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent{
  @Output() barraSuperiorChange = new EventEmitter<{ barraSuperior: BarraSuperiorDto }>();

  textoEsquerdo: string = '';
  textoDireito: string = '';
  logo: File | null = null;

  constructor(private base64Service: Base64Service) { }

  async emitChange() {
    const logoBase64: string = this.logo ? await this.base64Service.convertToBase64(this.logo): '';

    await this.barraSuperiorChange.emit({
      barraSuperior: {
        TextoEsquerdo: this.textoEsquerdo,
        TextoDireito: this.textoDireito,
        Logo: logoBase64,
      }
    });
  }

  async onFileChange(event: Event) {
    const input = await event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.logo = file;
    }
  }
}
