import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [{ path: 'home', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cart', redirectTo: '/cart', pathMatch: 'full' }
];
