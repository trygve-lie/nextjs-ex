'use client'

export default function Environment({ env }) {
  return (
    <div>
      <p>You clicked times</p>
      <button onClick={() => {
        alert(`Variable: ${env}`);
      }}>Click me</button>
    </div>
  )
}