import type { FC } from 'react'

import styles from './styles.module.css'
import { Movie } from '../../@types'
import { Card } from '..'

type Props = {
  movies: Movie[]
}

const Movies: FC<Props> = ({ movies }) => {
  const hasMovies = movies.length > 0

  return (
    <section className={styles.movies}>
      {hasMovies ? (
        <ul className={styles.grid}>
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </ul>
      ) : (
        <span>There is no movies</span>
      )}
    </section>
  )
}

export default Movies
