import { useEffect, useRef, useState } from 'react'

export function useSearch() {
  const isFirstInput = useRef<boolean>(true)

  const [search, updateSearch] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError("It's not possible finding movies")
      return
    }

    if (search.startsWith(' ')) {
      setError("It shouldn't start with whitespace")
      return
    }

    if (search.length < 3) {
      setError('It should have at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, error, updateSearch }
}
