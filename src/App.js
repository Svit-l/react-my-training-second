import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { OneMovie } from './components/OneMovie';
import { Layout } from './components/Layout';
import { Cast } from './components/Cast';
import { Reviews } from './components/Reviews';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Counter initialValue={200} />
//     </div>
//   );
// }

// export default App;

export function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/one-movie" element={<OneMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
