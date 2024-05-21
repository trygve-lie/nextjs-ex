import Link from 'next/link'
import Counter from "../client/counter.js";

export default function Home() {
  return (
    <main>
      <h1>Examples:</h1>
      <ul>
        <li><Link href="/ex-a">Client script example</Link></li>
        <li><Link href="/ex-b">Client calling API example</Link></li>
        <li><Link href="/ex-c">Server actions example</Link></li>
        <li><Link href="/ex-e">Configuration example</Link></li>
      </ul>
    </main>
  );
}
