import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
