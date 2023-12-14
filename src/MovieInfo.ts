import {Genre} from '@utils/types/genre.ts';

export type MovieInfo = {
  id: string;
  title: string;
  genre: Genre;
  year: string;
  iconName: string;
  playerLink: string;
}
