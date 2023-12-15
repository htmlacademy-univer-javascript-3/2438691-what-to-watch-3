import {Genre} from '@utils/types/genre.ts';

export type MovieInfo = {
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  name: string;
  genre: Genre;
  released: number;
  movie: string;
  id: number;
  description: string;
  rating: number;
  descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  scoresCount: number;
  director: string;
  starring: string[];
  videoLink:string;
  backgroundColor: string;
  runTime: number;
  isFavorite: boolean;
}
