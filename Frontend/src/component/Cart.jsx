import { Trash } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateAddonPrice } from "../utils/generateaddonprice";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { updateArrOfItems } from "../features/cart/cartSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export function Cart() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.cartArr?.value);
  const [amountObj, setAmountObj] = useState({
    price: 0,
    totalPrice: 0,
    totalDiscountedPrice: 0,
  });

  function findTotalPrice() {
    let obj = { price: 0, totalPrice: 0, totalDiscountedPrice: 0 };
    let total = 0;
    for (let i = 0; i < cartArr.length; i++) {
      const element = cartArr[i];
      total += element.price * element.count;
    }
    obj.totalPrice = total.toFixed(2);
    obj.price = generateAddonPrice(total);
    obj.totalDiscountedPrice = (obj.price - obj.totalPrice).toFixed(2);
    if (amountObj < 50) {
      setAmountObj(obj + 1);
    } else {
      setAmountObj(obj);
    }
  }
  useEffect(() => {
    findTotalPrice();
  }, [cartArr]);

  function increamentCounter(item) {
    item = { ...item, count: item.count + 1 };
    dispatch(updateArrOfItems({ item }));
  }
  function decreamentCounter(item) {
    item = { ...item, count: item.count - 1 };
    dispatch(updateArrOfItems({ item }));
  }
  function removeItem(item) {
    item = { ...item, count: 0 };
    dispatch(updateArrOfItems({ item }));
  }

  return (
    <div className=" px-20 lg:px-40 mt-28 ml-10 pr-10">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cart items
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading">
              {cartArr.length ? (
                ""
              ) : (
                <>
                  Cart looks empty{" "}
                  <Link to="/" className="text-blue-500">
                    come let's check latest collection
                  </Link>
                </>
              )}
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cartArr.map((product, productIdx) => (
                <div
                  key={product.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                  }}
                >
                  <Link to={`/product/${product.id}`}>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "24px 0",
                      }}
                    >
                      <div style={{ flexShrink: 0 }}>
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: "96px",
                            width: "96px",
                            borderRadius: "0.375rem",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginLeft: "16px",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            paddingRight: "36px",
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "24px",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: "0.875rem",
                                  fontWeight: "bold",
                                }}
                              >
                                <a
                                  href={product.href}
                                  style={{ fontWeight: "bold", color: "black" }}
                                >
                                  {product.title}
                                </a>
                              </h3>
                            </div>
                            <div
                              style={{
                                marginTop: "4px",
                                display: "flex",
                                fontSize: "0.875rem",
                                color: "#6b7280",
                              }}
                            >
                              <p style={{ color: "#6b7280" }}>
                                {product.color}
                              </p>
                              {product.size && (
                                <p
                                  style={{
                                    marginLeft: "16px",
                                    paddingLeft: "16px",
                                    borderLeft: "1px solid #e5e7eb",
                                    color: "#6b7280",
                                  }}
                                >
                                  {product.size}
                                </p>
                              )}
                            </div>
                            <div
                              style={{
                                marginTop: "4px",
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "0.75rem",
                                  fontWeight: "medium",
                                  color: "#6b7280",
                                  textDecoration: "line-through",
                                }}
                              >
                                $ {(product.price + 10).toFixed(2)}
                                {/* Assuming generateAddonPrice adds 10 */}
                              </p>
                              <p
                                style={{
                                  fontSize: "0.875rem",
                                  fontWeight: "medium",
                                  color: "#111827",
                                  marginLeft: "8px",
                                }}
                              >
                                $ {product.price}
                              </p>
                              <p
                                style={{
                                  fontSize: "0.875rem",
                                  fontWeight: "medium",
                                  color: "#10b981",
                                  marginLeft: "8px",
                                }}
                              >
                                10% off
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                  <div style={{ marginBottom: "8px", display: "flex" }}>
                    <div style={{ minWidth: "24px", display: "flex" }}>
                      <button
                        type="button"
                        style={{
                          height: "28px",
                          width: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => decreamentCounter(product)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        style={{
                          margin: "0 4px",
                          height: "28px",
                          width: "36px",
                          borderRadius: "0.375rem",
                          border: "1px solid #d1d5db",
                          textAlign: "center",
                        }}
                        value={product.count}
                      />
                      <button
                        type="button"
                        style={{
                          display: "flex",
                          height: "28px",
                          width: "28px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => increamentCounter(product)}
                      >
                        +
                      </button>
                    </div>
                    <div
                      style={{
                        marginLeft: "24px",
                        display: "flex",
                        fontSize: "0.875rem",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "4px 8px",
                          paddingLeft: "0",
                          color: "#ef4444",
                        }}
                        onClick={() => removeItem(product)}
                      >
                        {/* Assuming Trash is a component or replaced with an icon */}
                        {/* <span
                          style={{ fontSize: "0.75rem", fontWeight: "medium" }}
                        >
                          Remove
                        </span>*/}
                      </button>
                      <DeleteForeverIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => removeItem(product)}
                      />{" "}
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    $ {amountObj.price}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    - $ {amountObj.totalDiscountedPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    {amountObj.totalPrice > 50 ? "Free" : "$.10"}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $ {amountObj.totalPrice}
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save $ {amountObj.totalDiscountedPrice} on this order
              </div>

              {!cartArr.length ? (
                ""
              ) : (
                <div className="flex justify-end space-x-4">
                  {/* <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => navigate("/React-ecommerce/")}
                  >
                    Back to shop
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => navigate("/React-ecommerce/checkout")}
                  >
                    Checkout
                  </button> */}
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
