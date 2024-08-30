import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent implements OnInit{
  textoEsquerdo: string = '';
  textoDireito: string = '';
  logo: File | null = null;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onFileChange(event: Event, side: 'logo') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.logo = file;
    }
  }
}
