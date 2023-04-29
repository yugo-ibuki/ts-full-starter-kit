import { useEffect } from 'react';

export const Test = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8000/hello')
      const text = await res.json()
      console.log(text.message)
    })()
  }, [])

  return (
        <div>
            <h1>Test</h1>
        </div>
    );
}