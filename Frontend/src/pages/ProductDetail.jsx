import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, ArrowLeft } from "lucide-react";
import { generateAddonPrice } from "../utils/generateaddonprice";
import { useDispatch, useSelector } from "react-redux";
import { updateArrOfItems } from "../features/cart/cartSlice";
import CircularProgress from "@mui/material/CircularProgress";

export function ProductDetail() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.cartArr?.value);
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getProductDetailById() {
    try {
      setIsLoading(true);
      let item = cartArr?.find((elem) => elem?.id == id);
      if (item) {
        setProductDetail(item);
      } else {
        let { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log("data --- ", data);
        setProductDetail(data);
      }
    } catch (error) {
      console.error("Error -- ", error);
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductDetailById();
  }, []);

  function increamentCounter(item) {
    item = { ...item, count: (item?.count || 0) + 1 };
    setProductDetail(item);
    dispatch(updateArrOfItems({ item }));
  }
  function decreamentCounter(item) {
    item = { ...item, count: item.count - 1 };
    setProductDetail(item);
    dispatch(updateArrOfItems({ item }));
  }

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress style={{ width: "100px", height: "100px" }} />
        </div>
      ) : (
        <section className="overflow-hidden mt-[30px]">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
              <img
                alt={productDetail.title || "Product image"}
                className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                src={productDetail.image}
              />
              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                  {productDetail?.category?.toUpperCase()}
                </h2>
                <h1 className="my-4 text-3xl font-semibold text-black">
                  {productDetail.title}
                </h1>
                {/* <div className="my-4 flex items-center">
                  <span className="flex items-center space-x-1">
                    {[
                      ...Array(Math.floor(productDetail?.rating?.rate || 0)),
                    ].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                    <span className="ml-3 inline-block text-xs font-semibold">
                      {Math.floor(productDetail?.rating?.rate || 0)}
                    </span>
                  </span>
                </div> */}
                {/* <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                  {productDetail.rating?.count}+ brought in past month
                </h2> */}
                {/* <p className="leading-relaxed">{productDetail.description}</p> */}
                <div className="flex items-center justify-between">
                  <span className="title-font text-xl font-bold text-gray-900">
                    $ {productDetail.price} &nbsp;
                    <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                      ${generateAddonPrice(productDetail.price)}
                    </span>
                  </span>
                </div>
                {!productDetail?.count ? (
                  <button
                    onClick={increamentCounter(productDetail)}
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      padding: "10px",
                      color: "#fff",
                      backgroundColor: "#4CAF50",
                      textAlign: "center",
                      textDecoration: "none",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      borderRadius: "50px",
                    }}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div
                    style={{
                      marginTop: "16px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        backgroundColor: "#4CAF50",
                        padding: "8px 4px",
                        fontSize: "small",
                        fontWeight: "bold",
                        color: "white",
                        boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                        cursor: "pointer",
                        outline: "none",
                        ":hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                        ":focusVisible": {
                          outline: "2px solid black",
                          outlineOffset: "2px",
                        },
                      }}
                      onClick={() => decreamentCounter(productDetail)}
                    >
                      -
                    </button>
                    <span
                      style={{
                        margin: "0 16px",
                      }}
                    >
                      {productDetail?.count}
                    </span>
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        backgroundColor: "#4CAF50",
                        padding: "8px 4px",
                        fontSize: "small",
                        fontWeight: "bold",
                        color: "white",
                        boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                        cursor: "pointer",
                        outline: "none",
                        ":hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                        ":focusVisible": {
                          outline: "2px solid black",
                          outlineOffset: "2px",
                        },
                      }}
                      onClick={() => increamentCounter(productDetail)}
                    >
                      +
                    </button>
                  </div>
                )}
                <button
                  onClick={() => navigate(-1)}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                    borderRadius: "100px",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0, 123, 255, 0.5)",
                    transition: "background-color 0.3s",
                    width: "100%",
                    marginTop: 10,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#4CAF50")
                  }
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
