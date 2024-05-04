import React from "react";

function AboutUs() {
  // const containerStyle = {
  // };

  const headerStyle = {
    color: "#2a71d0",
    fontSize: "22px",
    margintTop: "300px",
  };

  return (
    <div
      style={{
        // maxWidth: "800px",
        margin: "100px 150px",
        padding: "20px",
        lineHeight: "1.6",
        fontFamily: "Arial, sans-serif",
        textAlign: "justify",
        color: "#333",
      }}
    >
      <h1 style={headerStyle}>About Rathi Fitness</h1>
      <p>
        Welcome to <strong>Rathi Fitness</strong>, where we believe that eating
        well doesn't have to come at the expense of taste. Our mission is to
        bring you the best of both worlds: delicious meals that also nourish
        your body.
      </p>
      <p>
        Since our founding in 2024, Rathi Fitness has been at the forefront of
        the healthy eating movement. Our chefs and nutritionists work hand in
        hand to craft meals that are both balanced and bursting with flavor.
        From hearty salads and smoothies to gourmet entrees, our menu is
        designed to cater to a variety of dietary needs and preferences, all
        while maintaining high nutritional standards.
      </p>
      <p>
        Our commitment extends beyond just food. We're dedicated to creating a
        sustainable business that respects the environment and supports our
        community. We source our ingredients from local, organic farms whenever
        possible, and we are always looking for ways to reduce our carbon
        footprint.
      </p>
      <h2 style={headerStyle}>Our Vision</h2>
      <p>
        At Rathi Fitness, our vision is to lead a global change towards healthy
        eating by making nutritious meals accessible to everyone. We dream of a
        world where everyone can enjoy a tasty, healthy meal, no matter where
        they are.
      </p>
      <h2 style={headerStyle}>Join Us</h2>
      <p>
        Join us on our journey to make the world a healthier, tastier place.
        Visit us at one of our locations or order online to taste the difference
        that Rathi Fitness brings.
      </p>
    </div>
  );
}

export default AboutUs;
