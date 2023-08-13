/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useRef, useState } from 'react'

import { fetchMovies } from './../services'
import { Movie } from './../@types'

type Props = {
  isSorting: boolean
}

export function useMovies({ isSorting }: Props) {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState(null)

  const previousSearch = useRef<string | null>(null)

  const getMovies = useCallback(async (search: string) => {
    try {
      setIsFetching(true)

      if (previousSearch.current === search.toLowerCase()) return
      previousSearch.current = search

      const newMovies = await fetchMovies(search)

      if (newMovies) setMovies(newMovies)
    } catch (err: any) {
      setError(err)
    } finally {
      setIsFetching(false)
    }
  }, [])

  const sortedMovies = useMemo(
    () =>
      isSorting
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [isSorting, movies]
  )

  return { error, getMovies, isFetching, movies: sortedMovies }
}
