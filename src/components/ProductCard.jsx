import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const ProductCard = ({ product, compact = false }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    toast.success("Added to cart");
    dispatch(addCart(product));
  };

  return (
    <div
      className={compact ? "mx-2" : "col-md-4 col-sm-6 col-12 mb-4 d-flex"}
      style={compact ? { minWidth: "220px", maxWidth: "250px" } : {}}
    >
      <div
        className={`card text-center shadow-sm d-flex flex-column w-100`}
        style={compact ? { height: "100%" } : {}}
      >
        <Link to={"/product/" + product.id}>
          <img
            className="card-img-top p-3"
            src={product.image}
            alt={product.title}
            height={compact ? 180 : 300}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.src = `https://dummyimage.com/180x180/cccccc/666666&text=No+Image`;
            }}
          />
        </Link>

        <div className="card-body d-flex flex-column justify-content-between px-2 py-3">
          <div>
            <h6
              className="card-title"
              style={{ minHeight: "40px", fontSize: compact ? "14px" : "16px" }}
            >
              {product.title.substring(0, 25)}...
            </h6>

            {/* {!compact && ( */}
            <>
              <p
                className="card-text text-muted"
                style={{ fontSize: "12px", minHeight: "72px" }}
              >
                {product.description?.substring(0, 90)}...
              </p>
              <p className="fw-bold">$ {product.price}</p>
              <select className="form-select mb-3">
                <option>Size S</option>
                <option>Size M</option>
                <option>Size L</option>
              </select>
            </>
            {/* )} */}
          </div>

          <div className="mt-auto">
            {product.id % 2 === 0 ? (
              <button className="btn btn-secondary w-100" disabled>
                Out of Stock
              </button>
            ) : (
              <button className="btn btn-dark w-100" onClick={handleAdd}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
