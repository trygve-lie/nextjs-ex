import Link from 'next/link';
import Environment from '../../client/environment.js';

export default function Page() {
  return (
    <main>
      <h1>Configuration</h1>
      <p>.....</p>
      <hr/>
      
      {process.env.SOME_NAME}

      <Environment env={process.env.SOME_NAME} />
      
      <hr/>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
