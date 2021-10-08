import React, { useState, useEffect } from "react";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const allApartments = () => {
    const url = "/api/v1/apartments";
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setApartments(data);
      })
      .catch((err) => {
        console.log("something went wrong", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    allApartments();
  }, []);

  if (loading) {
    return <h1> "Loading..."</h1>;
  }
  return (
    <>
      <h1>apartments?</h1>
      {apartments.map((apartment) => (
        <li key={apartment.id}>
          {apartment.street}
          <br />
          {apartment.state}
          <br />
          {apartment.manager}
          <br />
          {apartment.city}
          <br />
          {apartment.price}
        </li>
      ))}
    </>
  );
};
export default Apartments;
