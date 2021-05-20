import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerSaveComponent } from './components/customer-save/customer-save.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent},
  {path:'customer-save',component:CustomerSaveComponent},
  {path:'customer-edit/:custId',component:CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
