import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginForm.email && this.loginForm.password) {
      console.log('Login attempt:', this.loginForm);
      // Ici vous ajouteriez la logique d'authentification
    }
  }
}
