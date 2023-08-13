import { Movie, MoviesResponse } from '../@types'

export const fetchMovies = async (search: string) => {
  try {
    if (search === '') return null

    const response = await fetch(
      `https://www.omdbapi.com/?apiKey=203728fa&s=${search}`
    )

    if (!response.ok) return null

    const json = (await response.json()) as MoviesResponse

    const mappedMovies: Movie[] = json.Search.map((it) => ({
      id: it.imdbID,
      poster: it.Poster,
      title: it.Title,
      year: it.Year
    }))

    return mappedMovies
  } catch (err) {
    throw new Error('Error searching movies')
  }
}
