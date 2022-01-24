import React, { Fragment, useContext, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  useNavigate,
  Link,
  useSearchParams,
  Navigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import CardProduct from "../../components/CardProduct";
import styles from "./detail.module.css";
import ProdRating from "../../assets/img/ProdRating.svg";
import Star from "../../assets/img/Star.svg";
import { productContext } from "../../Context/ProductContext";
import { v4 as uuidv4 } from "uuid";

const DetailProduct = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState(36);
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { products, setProducts } = useContext(productContext);
  const [itemToCart, setItemToCart] = useState([]);

  const handleAddItemToBag = () => {
    const customer_bags_id = JSON.parse(
      localStorage.getItem("customer_bags_id")
    );
    if (customer_bags_id) {
      axios({
        baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
        method: "POST",
        data: {
          product_id: product.id,
          customer_bags_id: customer_bags_id,
          size: size,
          qty: qty,
          color: null,
        },
        url: `/add-item`,
      })
        .then((res) => {
          const result = res.data.data[0];
          setProduct(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const customer_bags_id = uuidv4();
      localStorage.setItem(
        "customer_bags_id",
        JSON.stringify(customer_bags_id)
      );
      axios({
        baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
        method: "POST",
        data: {
          product_id: product.id,
          customer_bags_id: customer_bags_id,
          size: size,
          qty: qty,
          color: null,
        },
        url: `/add-item`,
      })
        .then((res) => {
          const result = res.data.data[0];
          setProduct(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  // --------------

  const handleIncrementSz = () => {
    if (size < 46) {
      setSize(size + 1);
    } else {
      setSize(46);
    }
  };

  const handleIncrementQty = () => {
    setQty(qty + 1);
  };

  const handleDecrementQty = () => {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const handleDecrementSz = () => {
    if (size <= 36) {
      setSize(36);
    } else {
      setSize(size - 1);
    }
  };

  useEffect(() => {
    axios({
      baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
      method: "GET",
      url: `products/details/${id}`,
    })
      .then((res) => {
        const result = res.data.data[0];
        setProduct(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleAddItemToBag]);

  return (
    <Fragment>
      <Navbar />
      <main className={`container-fluid ${styles.con} bg-white`}>
        <div className="container h-100">
          <p className="text-secondary mt-5 mb-5">
            Home {">"} Category {">"} {product ? product.category_name : `Loading Category`}
          </p>
          <section className={`h-25 d-flex form-prod`}>
            <div className={`${styles.prodformleft} h-100 me-1`}>
              <img src={product ? product.image1 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'} alt="" className={styles.prodPic} />
              <div
                className={`d-flex ${styles.prodPicLower} mt-1 justify-content-between`}
              >
                <img
                  className={`${styles.lowerPic}`}
                  src={product ? product.image1 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'}
                  alt=""
                />
                <img
                  className={`${styles.lowerPic}`}
                  src={product ? product.image2 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'}
                  alt=""
                />
                <img
                  className={`${styles.lowerPic}`}
                  src={product ? product.image3 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'}
                  alt=""
                />
                <img
                  className={`${styles.lowerPic}`}
                  src={product ? product.image4 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'}
                  alt=""
                />
                <img
                  className={`${styles.lowerPic}`}
                  src={product ? product.image5 : 'https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg'}
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.prodformright} h-100 ms-5`}>
              <h1 className="mb-3">{product ? product.name : `Loading`}</h1>
              <p className="text-secondary mb-3">{product ? product.store_name : `Loading`}</p>
              <img src={ProdRating} alt="" />
              <p className="my-3 text-secondary">Price</p>
              <h3 className="mb-3">$ {product ? product.price : `Loading`}.00</h3>

              <section className={`form-order d-flex my-5`}>
                <div className={`button-1 me-5`}>
                  <h5 className={`${styles.sizeText}`}>Size</h5>
                  <div className="d-flex">
                    <Button
                      className={`${styles.formButton} ${styles.buttonMin} me-2`}
                      onClick={handleDecrementSz}
                    >
                      -
                    </Button>
                    <div className={`${styles.formButton}`}>{size}</div>
                    <Button
                      className={`${styles.formButton} ${styles.buttonPlus}`}
                      onClick={handleIncrementSz}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className={`button-1 ms-5`}>
                  <h5 className={`${styles.sizeText}`}>Quantity</h5>
                  <div className="d-flex">
                    <Button
                      className={`${styles.formButton} ${styles.buttonMin} me-2`}
                      onClick={handleDecrementQty}
                    >
                      -
                    </Button>
                    <div className={`${styles.formButton}`}>{qty}</div>
                    <Button
                      className={`${styles.formButton} ${styles.buttonPlus}`}
                      onClick={handleIncrementQty}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </section>
              <div className="lower-buttons d-flex w-100 mt-5  justify-content-between">
                <Button
                  className={`${styles.lowerButtons} bg-white ${styles.whiteButton} justify-content-start me4`}
                >
                  Chat
                </Button>
                <Button
                  className={`${styles.lowerButtons} bg-white ${styles.whiteButton}`}
                  onClick={handleAddItemToBag}
                >
                  Add Bag
                </Button>
                <Button
                  className={`${styles.lowerButtons} bg-primary ${styles.redButton}`}
                  onClick={() => navigate("/checkout")}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </section>

          <section className={`${styles.descriptionProd}`}>
            <h3 className="my-5">Product Information</h3>
            <h5>Condition</h5>
            <h4 className="text-primary mb-5">{product ? product.product_condition : `Loading`}</h4>

            <h5 className="mt-5">Description</h5>
            <p className="text-secondary mb-5">
              {product ? product.description : `Loading`}
              <br />
              <br />
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt
              tristique placerat. Pellentesque a consequat mauris, vel suscipit
              ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam
              elit, sollicitudin eu nisl at, ornare suscipit magna.
              <br />
              <br />
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis.
              <br />
              <br />
              In ultricies rutrum tempus. Mauris vel molestie orci.
            </p>
          </section>
          <section className="d-flex flex-column">
            <div className={`${styles.productRating} mt-5`}></div>
            <h3>Product Review</h3>
            <div className={`d-flex`}>
              <div className={`1 me-3`}>
                <h2>
                  5.0
                  <span className={`text-secondary ${styles.ratingText}`}>
                    {" "}
                    /5
                  </span>
                </h2>
                <img src={ProdRating} alt="" />
              </div>
              <div className="2 ms-3 me-5">
                <div className="d-flex">
                  <img className={`${styles.starPic}`} src={Star} alt="" />
                  <p className="text-secondary ms-2"> 5</p>
                </div>
                <div className="d-flex">
                  <img className={`${styles.starPic}`} src={Star} alt="" />
                  <p className="text-secondary ms-2"> 4</p>
                </div>
                <div className="d-flex">
                  <img className={`${styles.starPic}`} src={Star} alt="" />
                  <p className="text-secondary ms-2"> 3</p>
                </div>
                <div className="d-flex">
                  <img className={`${styles.starPic}`} src={Star} alt="" />
                  <p className="text-secondary ms-2"> 2</p>
                </div>
                <div className="d-flex apagitu">
                  <img className={`${styles.starPic}`} src={Star} alt="" />
                  <p className="text-secondary ms-2"> 1</p>
                </div>
              </div>
              <div className="3 ms-5">
                <p className="text-secondary">5</p>
                <p className="text-secondary">0</p>
                <p className="text-secondary">0</p>
                <p className="text-secondary">0</p>
                <p className="text-secondary">0</p>
              </div>
            </div>
          </section>
          <hr className="mt-4" />
          <section className="d-flex flex-column">
            <h3 className="mt-3">You can also like</h3>
            <p className="text-secondary my5">You've never seen it before!</p>
            <div className="card-container d-flex flex-wrap justify-content-around">
              {products.map((prods) => {
                return (
                  <CardProduct
                    key={prods.id}
                    image={prods.image1}
                    name={prods.name}
                    price={prods.price}
                    store_name={prods.store_name}
                    onClick={() => navigate(`/detail-product/${prods.id}`)}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default DetailProduct;
