import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isActive = true;

  toggleSidebar(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName !== 'LI' && !target.closest('li')) {
      this.isActive = !this.isActive;
    }
  }
}
