import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { AdministratorMainPageComponent } from './pages/administrator-main-page/administrator-main-page.component';

const routes: Routes = [
  {
    path: '',  children: [
      {
        path: 'create-product', component: CreateProductPageComponent
      },
      {
        path: '**', redirectTo: 'create-product', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
