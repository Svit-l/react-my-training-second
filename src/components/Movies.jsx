import { Link } from 'react-router-dom';

export function Movies() {
  return (
    <>
      <main>
        <h2>List of movies</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="one-movie">One Movie</Link>
      </nav>
    </>
  );
}
