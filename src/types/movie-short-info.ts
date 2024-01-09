import {Genre} from '@utils/types/genre.ts';

export type MovieShortInfo = {
  genre: Genre;
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}
