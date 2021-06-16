import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "./actions";

const Product = (props) => {
  return (
    <div>
      <div>Shooping App</div>

      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="cardLayout">
        {props.items.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="cardDetail">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width="100px"
                  height="150px"
                ></img>
                <div className="cardDetailLayout">
                  <p className="cardTitle">{item.title}</p>
                  <p className="cardDetailText">
                    Author: {item.author} - Price :{item.price} &#8378;
                  </p>
                  <button
                    className="block"
                    onClick={() => props.addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items, cart: state.cart };
};
export default connect(mapStateToProps, { addToCart })(Product);
