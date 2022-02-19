import { Link } from 'react-router-dom';

export function Cast() {
  return (
    <>
      <main>
        <h2>Cast</h2>
        <p>Actors here</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
