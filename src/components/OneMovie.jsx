import { Link, Outlet } from 'react-router-dom';

export function OneMovie() {
  return (
    <>
      <main>
        <h2>About one movie</h2>
      </main>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
