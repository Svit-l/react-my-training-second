import './App.css';
import datas from '../Product/data.json';
import { Product } from '../Product/Product.jsx';

export function App() {
  console.log(datas);
  return (
    <div>
      <h1>Best selling products</h1>
      <Product data={datas} />
    </div>
  );
}
