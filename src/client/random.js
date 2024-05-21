'use client'
 
import { useState } from 'react'
 
export default function Random({ max, min }) {
  const [data, setData] = useState(0)

  return (
    <div>
      <p>Random: {data}</p>
      <button onClick={async () => {
        const params = new URLSearchParams({
            max,
            min,
        });

        const req = await fetch(`/api/random/?${params.toString()}`);
        const obj = await req.json();
        
        setData(obj.value);
      }}>Click for random number</button>
    </div>
  )
}