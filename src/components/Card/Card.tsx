import type { FC } from 'react'

import { Movie } from './../../@types'
import styles from './style.module.css'

const Card: FC<Movie> = ({ title, poster, year }) => {
  return (
    <article className={styles.card}>
      <img alt={title} className={styles.poster} src={poster} />
      <section className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.year}>{year}</span>
      </section>
    </article>
  )
}

export default Card
