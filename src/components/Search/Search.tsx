import { ChangeEvent, FC, useCallback } from 'react'

type Props = {
  isSorting?: boolean
  onChange: (search: string) => void
  onCheck: () => void
  search: string
}

const Search: FC<Props> = ({ search, isSorting, onChange, onCheck }) => {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newSearch = event.target.value

      onChange(newSearch)
    },
    [onChange]
  )

  const handleOnCheck = useCallback(() => onCheck(), [onCheck])

  return (
    <header className="form-header">
      <input
        name="query"
        onChange={handleOnChange}
        placeholder="Avengers, Start wars ..."
        type="text"
        value={search}
      />
      <input
        id="order-movies"
        name="order-movies"
        type="checkbox"
        checked={isSorting}
        onChange={handleOnCheck}
        aria-label="sort-checkbox"
      />
      <label className="checkbox" htmlFor="order-movies">
        Order
      </label>
      <button type="submit">Search</button>
    </header>
  )
}

export default Search
