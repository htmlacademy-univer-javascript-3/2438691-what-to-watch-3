export enum Genre {
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller',
  AllGenres = 'All genres',
}


export const genres: Genre[] = Object.keys(Genre) as Genre[];
