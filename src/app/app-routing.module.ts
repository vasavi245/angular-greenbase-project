import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path:"home", component: BaseComponent },
  { path:"orders", component: BaseComponent },
  { path:"products", component: BaseComponent },
  { path:"categories", component: CategoriesListComponent },
  { path:"customers", component: BaseComponent },
  { path:"reports", component: BaseComponent },
  { path:"coupons", component: BaseComponent },
  { path:"inbox", component: BaseComponent },
  { path:"knowledgebase", component: BaseComponent },
  { path:"productupdates", component: BaseComponent },
  { path:"personalsettings", component: BaseComponent },
  { path:"globalsettings", component: BaseComponent },
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule, RouterModule.forRoot(routes, {useHash: true,})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
