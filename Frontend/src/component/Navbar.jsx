import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../assets/icons/cart-icon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TextField, Typography } from "@mui/material";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "AboutUs",
    href: "/about-business",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartArr = useSelector((state) => state.cartArr?.value);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "80%",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "100px",
        zIndex: 1000,
        alignSelf: "center",
        top: 15,
      }}
    >
      <div
        style={{
          maxWidth: "1792px",
          display: "flex",
          justifyContent: "space-between",
          // padding: "8px 32px",
          padding: "10px 20px",
          // paddingRight: 130,
          margin: "auto",
        }}
      >
        <Link to="/" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </span>
            <span style={{ fontWeight: "bold" }}>Rathi Fitnesss</span>
          </div>
        </Link>
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <ul
            style={{ marginLeft: "48px", display: "inline-flex", gap: "32px" }}
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#4A4A4A",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField placeholder="Search Product" />

          <Link to="/cartitems" style={{ marginLeft: 20 }}>
            <button
              style={{
                borderRadius: "9999px",
                position: "relative",
                // backgroundColor: "#000",
                // padding: "12px",
                // fontSize: "small",
                // fontWeight: "bold",
                // color: "#FFF",
                // boxShadow: "0px 1px 2px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <img
                  src={CartIcon}
                  alt="Cart"
                  style={{ height: "18px", width: "18px" }}
                /> */}
                <ShoppingCartIcon
                  style={{ color: "black", fontSize: "40px" }}
                />
                &nbsp;
                <Typography
                  position={"absolute"}
                  right={0}
                  top={-10}
                  width={"20px"}
                  padding={"2px"}
                  backgroundColor="green"
                  color={"white"}
                  fontSize={"14px"}
                  borderRadius={50}
                  boxShadow={"0px 1px 2px rgba(0,0,0,0.25)"}
                >
                  {cartArr.length || 0}
                </Typography>
              </div>
            </button>
          </Link>
        </div>
        {/* <div>
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <X style={{ height: "24px", width: "24px" }} />
            </button>
          ) : (
            <Menu
              onClick={toggleMenu}
              style={{ height: "24px", width: "24px", cursor: "pointer" }}
            />
          )}
        </div> */}
      </div>
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            padding: "8px",
            backgroundColor: "#FFF",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
              borderBottom: "2px solid #F2F2F2",
            }}
          >
            <div style={{ display: "inline-flex", gap: "8px" }}>
              {/* SVG and Text Same as Above */}
            </div>
            <button
              onClick={toggleMenu}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <X style={{ height: "24px", width: "24px" }} />
            </button>
          </div>
          <nav style={{ marginTop: "24px" }}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  display: "block",
                  padding: "12px",
                  fontSize: "medium",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
