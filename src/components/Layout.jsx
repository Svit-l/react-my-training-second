import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <main>
        <h2>List of movies</h2>
      </main>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
}
