import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  {
    path: 'cats',
    component: CatsComponent,
  },
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DogsComponent, CatsComponent, CatComponent],
})
export class BubblingModule {}
