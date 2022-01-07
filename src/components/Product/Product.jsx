import PropTypes from 'prop-types';

export const Product = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(d => (
        <div key={d.id}>
          <img src={d.imgUrl} alt={d.name} width="640" />
          <h2>{d.name}</h2>
          <p>Price: {d.price}$</p>
          <button type="button">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

Product.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
