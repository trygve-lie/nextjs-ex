import Link from 'next/link';
import Counter from "../../client/counter.js";

export default function Page() {
  return (
    <main>
      <h1>Client script example</h1>
      <p>The counter below runs only in the browser. When clicking the button the number is incremented and the page is updated dynamically in the browser. Nothing is sent to the server here.</p>
      <hr/>
      <Counter />
      <hr/>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
