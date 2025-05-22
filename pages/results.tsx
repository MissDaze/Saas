
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Results() {
  const router = useRouter()
  const { kw } = router.query
  const [dorks, setDorks] = useState<string[]>([])

  useEffect(() => {
    if (kw) {
      const keywords = [
        `"${kw}" inurl:index.php?id=`,
        `"${kw}" inurl:page.php?cat=`,
        `"${kw}" inurl:news.php?n=`,
        `"${kw}" inurl:shop.php?pid=`
      ]
      setDorks(keywords)
    }
  }, [kw])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dork Results for "{kw}"</h1>
      <ul>
        {dorks.map((dork, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>{dork}</li>
        ))}
      </ul>
    </main>
  )
}
