import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

const routes: Routes = [
  {
    path: '',
    component: ListGifsComponent,
    canActivate: [],
  },
  {
    path: '',
    component: InputSearchComponent,
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
