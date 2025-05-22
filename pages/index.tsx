
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`/results?kw=${encodeURIComponent(keyword)}`)
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>SQLi Dork Scanner</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>
        Search
      </button>
    </main>
  )
}
