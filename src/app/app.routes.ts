import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersResolver } from './resolvers/characters-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: { characters: CharactersResolver },
  },
];
