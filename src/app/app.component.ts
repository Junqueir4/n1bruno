import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpellsListComponent } from './spells/spells-list/spells-list.component';
import { CharactersResolver } from './resolvers/characters-resolver.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SpellsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'spa-harry-potter';
  characters: Character[] = [];

  constructor(private charactersResolver: CharactersResolver) {}

  ngOnInit(): void {
    // Chamando o serviço diretamente para obter os personagens
    this.charactersResolver.resolve().subscribe((data) => {
      this.characters = data;
      console.log('Personagens carregados no AppComponent:', this.characters);
    });
  }
}
