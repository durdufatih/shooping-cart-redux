import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <div>
      <div>
        <Link to="/">Booking List</Link>
      </div>

      <div>Cart</div>
      <div className="cardLayout">
        {props.cart.map((item, index) => {
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
                    Sepetinizde {item.count} ürün var
                  </p>
                  <div>
                    <p className="cardDetailText">
                      Price :{item.price} &#8378; -Total Price:
                      {item.price * item.count}
                    </p>
                  </div>
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
export default connect(mapStateToProps)(Cart);
