import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent implements OnInit{
  logo: File | null = null;
  textoEsquerdo: string = '';
  textoCentral: string = '';
  textoDireito: string = '';

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
