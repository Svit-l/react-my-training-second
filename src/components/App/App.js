import './App.css';
import datas from '../Product/data.json';
import { Product } from '../Product/Product';

// import Profile from './components/Profile';
// import user from './user.json';

// export default function App() {
//   return (
//     <div className="App">
//       <Profile
//         avatar={user.avatar}
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//     </div>
//   );
// }

export function App() {
  console.log(datas);
  return (
    <div>
      <h1>Best selling products</h1>
      <Product data={datas} />
    </div>
  );
}
