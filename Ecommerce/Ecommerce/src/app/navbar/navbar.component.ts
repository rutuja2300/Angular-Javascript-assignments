import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() showHome = new EventEmitter<void>();
  @Output() showCart = new EventEmitter<void>();

  navigateToHome() {
    this.showHome.emit();
  }

  navigateToCart() {
    this.showCart.emit();
  }
}
