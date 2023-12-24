import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template:`
        <main>
        <header class="brand-name">
          <img class="brand-logo" [routerLink]="['/']" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homes';
}
