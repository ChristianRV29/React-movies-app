import { FormEvent, Suspense, lazy, useState } from 'react'

import './App.css'

const Search = lazy(() => import('./components/Search/Search'))
const Movies = lazy(() => import('./components/Movies/Movies'))

import { useMovies, useSearch } from './hooks'

function App() {
  const [isSorting, setIsSorting] = useState<boolean>(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, isFetching } = useMovies({ isSorting })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    getMovies(search)
  }

  const handleOnChange = (newSearch: string) => {
    updateSearch(newSearch)
  }

  const handleSort = () => setIsSorting(!isSorting)

  return (
    <Suspense fallback={<span>...Loading components</span>}>
      <main className="page">
        <h1 className="title">Movie searcher</h1>
        <form className="search-movies" onSubmit={handleSubmit}>
          <Search
            isSorting={isSorting}
            onChange={handleOnChange}
            onCheck={handleSort}
            search={search}
          />
          {error && <span className="error">{error}</span>}
        </form>
        {isFetching ? <span>Loading...</span> : <Movies movies={movies} />}
      </main>
    </Suspense>
  )
}

export default App
