import {Genre} from '@utils/types/genre.ts';

export type MovieFullInfo = {
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  backgroundImage: string;
  name: string;
  genre: Genre;
  released: number;
  movie: string;
  id: string;
  description: string;
  rating: number;
  descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  scoresCount: number;
  director: string;
  starring: string[];
  videoLink: string;
  backgroundColor: string;
  runTime: number;
  isFavorite: boolean;
}
