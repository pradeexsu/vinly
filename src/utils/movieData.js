const movies = [
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: "1977",
    id: "1",
    genre: { name: "Action", id: "1" },
    rate: 5.3,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    id: "2",
    genre: { name: "Action", id: "1" },
    rate: 5.7,
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: "1983",
    id: "3",
    genre: { name: "Action", id: "1" },
    rate: 6,
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    year: "1999",
    id: "4",
    genre: { name: "Action", id: "1" },
    rate: 6.3,
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005",
    id: "5",
    genre: { name: "Comic", id: "3" },
    rate: 7.4,
  },
  {
    title: "Star Wars: Episode II - Attack of the Clones",
    year: "2002",
    id: "6",
    genre: { name: "Comic", id: "3" },
    rate: 8.5,
  },
  {
    title: "Star Wars: The Force Awakens",
    year: "2015",
    id: "7",
    genre: { name: "Comic", id: "3" },
    rate: 8.2,
  },
  {
    title: "Star Wars: The Clone Wars",
    year: "2008",
    id: "8",
    genre: { name: "Thrile", id: "2" },
    rate: 9.2,
  },
  {
    title: "Star Wars: The Clone Wars",
    year: "2008–2015",
    id: "9",
    genre: { name: "Thrile", id: "2" },
    rate: 9.1,
  },
  {
    title: "Star Wars: Clone Wars",
    year: "2003–2005",
    id: "10",
    genre: { name: "Thrile", id: "2" },
    rate: 8.8,
  },
];
const genres = [
  { name: "All Genres", id: "0" },
  { name: "Action", id: "1" },
  { name: "Comic", id: "3" },
  { name: "Thrile", id: "2" },
];

export const getMovies = () => movies;
export const getGenres = () => genres;
