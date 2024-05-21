'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
  console.log('Counter component');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        console.log('Client count', count + 1);
        setCount(count + 1)
      }}>Click me</button>
    </div>
  )
}