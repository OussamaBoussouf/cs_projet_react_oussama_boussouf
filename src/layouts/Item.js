import "./Item.scss";

import {AiOutlineHeart} from 'react-icons/ai';

export const Item = (props) => {

  return (
    <div className="product">
      <div className="image-container mb-1">
        {
          props.state == 'New'?
          <span className="state px-12 rounded-pill bg-light-blue">{props.state}</span>
          :props.state == 'Old'?
          <span className="state px-12 rounded-pill bg-success">{props.state}</span>
          : <span className="state px-12 rounded-pill bg-light-orange">{props.state}</span>
        }
        <button className="heart-icon z-1 border-0 bg-transparent"> <AiOutlineHeart style={{fontSize: '1.5rem'}} /> </button>
        <img className="product-image" src={props.imageSrc} alt="product" />
        <button className="btn-cta border-0 rounded-pill bg-black text-white px-1 py-12 position-absolute bottom-0 start-50 translate-middle z-1">ADD TO CART</button>
        <div className="overlay"></div>
      </div>
      <p className="mb-10">{props.name}</p>
      <p className="price">${props.price}</p>
    </div>
  );
};