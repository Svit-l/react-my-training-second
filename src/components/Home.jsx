import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/movies">Movies</Link>
      </nav>
    </>
  );
}
