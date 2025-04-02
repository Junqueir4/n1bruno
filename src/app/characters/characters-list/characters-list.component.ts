import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.characters = data['characters'];
      console.log('Personagens carregados:', this.characters);
    });
  }
}
