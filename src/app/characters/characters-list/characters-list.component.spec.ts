import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from '../characters-list/characters-list.component';
import { CharactersResolver } from '../../resolvers/characters-resolver.service';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersListComponent,
    resolve: { characters: CharactersResolver },
  },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
