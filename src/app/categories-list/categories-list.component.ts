import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
})

export class CategoriesListComponent implements OnInit {

cards: {imageUrl: string, title: string, itemNumbers: string}[] = [
  {
    imageUrl: '/assets/images/category-images.png',
    title: 'Mens clothing',
    itemNumbers: '34 Items',
  },
  {
    imageUrl: 'assets/images/category-images.png',
    title: 'Womens clothing',
    itemNumbers: '14 Items',
  },
  {
    imageUrl: 'assets/images/category-images.png',
    title: 'cotton clothing',
    itemNumbers: '8 Items',
  },
  {
    imageUrl: 'assets/images/category-images.png',
    title: 'Accessories',
    itemNumbers: '34 Items',
  },
  {
    imageUrl: 'assets/images/category-images.png',
    title: 'Accessories',
    itemNumbers: '34 Items',
  },
  {
    imageUrl: 'assets/images/category-images.png',
    title: 'Accessories',
    itemNumbers: '34 Items',
  },
]
  constructor() {
  }

  ngOnInit(): void {

  }

}
