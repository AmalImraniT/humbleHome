import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  isDarkMode = false;
  currentLanguage = 'fr';
  isMenuOpen = false;
  isSubmenuOpen = false;
  isLanguageMenuOpen = false;
  cartCount = 0;
  categories: string[] = [];

  constructor(
    private translate: TranslateService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    // Charger le mode sombre depuis localStorage
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    this.applyTheme();

    // Charger la langue depuis localStorage
    const savedLang = localStorage.getItem('language') || 'fr';
    this.currentLanguage = savedLang;
    this.translate.use(savedLang);

    // Charger les catégories de produits
    this.loadCategories();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.isLanguageMenuOpen = false;
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  getLanguageDisplay(): string {
    switch (this.currentLanguage) {
      case 'fr': return '🇫🇷 FR';
      case 'en': return '🇺🇸 EN';
      case 'es': return '🇪🇸 ES';
      default: return '🇫🇷 FR';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled:', this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isSubmenuOpen = false;
  }

  toggleSubmenu(event: Event) {
    event.preventDefault();
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  toggleSearch() {
    // Fonctionnalité de recherche à implémenter
    console.log('Recherche activée');
  }

  toggleCart() {
    // Fonctionnalité de panier à implémenter
    console.log('Panier ouvert');
  }

  loadCategories() {
    const categoriesData = this.productService.getCategories();
    this.categories = categoriesData.map(cat => cat.name);
    console.log('Categories loaded:', this.categories);
  }

  goToCategory(categoryName: string) {
    this.closeMenu();
    this.router.navigate(['/products'], { 
      queryParams: { category: categoryName } 
    });
  }
}
