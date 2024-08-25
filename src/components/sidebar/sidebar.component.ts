import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { ContratosComponent } from "../contratos/contratos.component";
import { EmailsComponent } from "../emails/emails.component";
import { ModalsComponent } from "../modals/modals.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, HomeComponent, ContratosComponent, EmailsComponent, ModalsComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isActive = true;
  activeContent: string = 'home';

  toggleSidebar(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName !== 'LI' && !target.closest('li')) {
      this.isActive = !this.isActive;
    }
  }

  setActiveContent(content: string) {
    this.activeContent = content;
  }
}
