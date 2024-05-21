import Link from 'next/link';
import Random from '../../client/random.js';

export default function Page() {
  return (
    <main>
      <h1>Client calling API example</h1>
      <p>The randomizer below do a HTTP fetch to a API endpoint on the server. The server then returns a JSON with a random value and then the page is updated dynamically in the browser.</p>
      <hr/>
      <Random max={300} min={30} />
      <hr/>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
