import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCategoryComponent } from './user-category/user-category.component';

const routes: Routes = [
  {path:'login', component:UserCategoryComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
