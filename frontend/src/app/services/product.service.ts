import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  name: string;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    // Hogar
    { id: 1, name: 'Sofá Moderno', price: 599, image: '🛋️', category: 'Hogar' },
    { id: 2, name: 'Mesa de Centro', price: 199, image: '🪑', category: 'Hogar' },
    { id: 3, name: 'Lámpara LED', price: 89, image: '💡', category: 'Hogar' },
    { id: 4, name: 'Alfombra Vintage', price: 149, image: '🪞', category: 'Hogar' },
    
    // Tecnología
    { id: 5, name: 'Smartphone Pro', price: 899, image: '📱', category: 'Tecnología' },
    { id: 6, name: 'Tablet 10"', price: 399, image: '📱', category: 'Tecnología' },
    { id: 7, name: 'Auriculares BT', price: 129, image: '🎧', category: 'Tecnología' },
    { id: 8, name: 'Smart Watch', price: 299, image: '⌚', category: 'Tecnología' },
    
    // Decoración
    { id: 9, name: 'Cuadro Abstracto', price: 79, image: '🖼️', category: 'Decoración' },
    { id: 10, name: 'Planta Succulenta', price: 25, image: '🌵', category: 'Decoración' },
    { id: 11, name: 'Velas Aromáticas', price: 35, image: '🕯️', category: 'Decoración' },
    { id: 12, name: 'Espejo Decorativo', price: 89, image: '🪞', category: 'Decoración' },
    
    // Aromas
    { id: 13, name: 'Difusor Lavanda', price: 45, image: '🌸', category: 'Aromas' },
    { id: 14, name: 'Incienso Natural', price: 15, image: '🕯️', category: 'Aromas' },
    { id: 15, name: 'Spray Ambiental', price: 22, image: '🌿', category: 'Aromas' },
    { id: 16, name: 'Velas de Soja', price: 28, image: '🕯️', category: 'Aromas' }
  ];

  getCategories(): Category[] {
    const categories = ['Hogar', 'Tecnología', 'Decoración', 'Aromas'];
    
    return categories.map(categoryName => ({
      name: categoryName,
      products: this.mockProducts
        .filter(product => product.category === categoryName)
        .slice(0, 4) // Limiter à 4 produits par catégorie
    }));
  }

  getAllProducts(): Product[] {
    return this.mockProducts;
  }

  getProductById(id: number): Product | undefined {
    return this.mockProducts.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.mockProducts.filter(product => product.category === category);
  }
}
