import Link from 'next/link';
import Simple from '../../actions/simple.js';

export default function Page() {
  return (
    <main>
      <h1>Server actions example</h1>
      <p>The form below uses Server Actions to handle form data on the server.</p>
      <hr/>
      <form action={Simple}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
      <hr/>
      <p><Link href="/">Home</Link></p>
    </main>
  )
}
