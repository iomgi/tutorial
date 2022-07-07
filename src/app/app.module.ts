import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bubbling',
    loadChildren: () =>
      import('./features/bubbling/bubbling.module').then(
        (m) => m.BubblingModule
      ),
  },
  {
    path: '',
    redirectTo: 'bubbling',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
