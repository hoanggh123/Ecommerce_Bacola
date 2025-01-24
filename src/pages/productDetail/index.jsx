import React, { useState } from "react";
import "./index.css";
import { Button, Rating, Tooltip } from "@mui/material";
import ProductZoom from "../../component/productZoom";
import QuantityBox from "../../component/quantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import RelatedProducts from "./RelatedDetail";

const ProductDetail = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <section className="productDetails section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pl-2">
            <ProductZoom />
          </div>
          <div className="col-md-8">
            <h1 className="hd text-capitalize">
              All Natural Italian-Style Chicken Meatballs
            </h1>
            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <span className="text-light mr-2">Brans:</span>
                <span>Welch's</span>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating
                    name="read-only"
                    value={4.5}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                  <span className="text-light cursor">1 Review</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info mb-2">
              <span className="oldPrice">$20.00</span>
              <span className="netPrice text-danger">$14.00</span>
            </div>
            <span className="badge badge-success">IN STOCK</span>
            <p className="mt-2 description">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent.
            </p>
            <div className="productSize d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul>
                <li className="list list-inline-item">
                  <Button
                    className={`tag ${activeSize === 0 ? "active" : ""}`}
                    onClick={() => isActive(0)}
                  >
                    50g
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    className={`tag ${activeSize === 1 ? "active" : ""}`}
                    onClick={() => isActive(1)}
                  >
                    100g
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    className={`tag ${activeSize === 2 ? "active" : ""}`}
                    onClick={() => isActive(2)}
                  >
                    150g
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    className={`tag ${activeSize === 3 ? "active" : ""}`}
                    onClick={() => isActive(3)}
                  >
                    200g
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button
                    className={`tag ${activeSize === 4 ? "active" : ""}`}
                    onClick={() => isActive(4)}
                  >
                    250g
                  </Button>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center mt-3">
              <QuantityBox />
              <Button className="btn-blue btn-big btn-round">
                Add to cart
              </Button>
              <Tooltip title="Add to Wishlist" placement="top">
                <Button className="btn-blue btn-circle ml-2">
                  <FaRegHeart />
                </Button>
              </Tooltip>
              <Tooltip title="Add to Compare" placement="top">
                <Button className="btn-blue btn-circle ml-2">
                  <MdOutlineCompareArrows />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        <br />
        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 0 ? "active" : ""}`}
                  onClick={() => setActiveTabs(0)}
                >
                  Description
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 1 ? "active" : ""}`}
                  onClick={() => setActiveTabs(1)}
                >
                  Additional info
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 2 ? "active" : ""}`}
                  onClick={() => setActiveTabs(2)}
                >
                  Reviews
                </Button>
              </li>
            </ul>
            <br />
            {activeTabs === 0 && (
              <div className="tabContent">
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart. Spluttered narrowly yikes left
                  moth in yikes bowed this that grizzly much hello on spoon-fed
                  that alas rethought much decently richly and wow against the
                  frequent fluidly at formidable acceptably flapped besides and
                  much circa far over the bucolically hey precarious goldfinch
                  mastodon goodness gnashed a jellyfish and one however because.
                </p>
              </div>
            )}
            {activeTabs === 1 && (
              <div className="tabContent">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTabs === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>
                      Reviews for All Natural Italian-Style Chicken Meatballs
                    </h3>
                    <br />
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g"
                            alt=""
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Do Huy Hoang
                        </span>
                      </div>
                      <div className="info pl-5">
                        <div className="d-flex align-items-center w-100">
                          <h5 className="text-light">May 1, 2021</h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              value={4.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Uninhibited carnally hired played in whimpered dear
                          gorilla koala depending and much yikes off far quetzal
                          goodness and from for grimaced goodness unaccountably
                          and meadowlark near unblushingly crucial scallop
                          tightly neurotic hungrily some and dear furiously this
                          apart. Spluttered narrowly yikes left moth in yikes
                          bowed this that grizzly much hello on spoon-fed that
                          alas rethought much decently richly and wow against
                          the frequent fluidly at formidable acceptably flapped
                          besides and much circa far over the bucolically hey
                          precarious goldfinch mastodon goodness gnashed a
                          jellyfish and one however because.
                        </p>
                      </div>
                    </div>

                    <form className="reviewForm">
                      <h4 className="">Add a review</h4>
                      <br />
                      <div className="form-group">
                        <textarea
                          className="w-100"
                          name="review"
                          placeholder="Write a Review"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              name="userName"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Rating name="rating" value={4.5} precision={0.5} />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Button
                          type="submit"
                          className="btn-big btn-lg btn-blue btn-round"
                        >
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <br />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductDetail;
