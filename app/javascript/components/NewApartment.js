import React, { useState } from "react";


const NewApartment = ({user}) =>{
  const [apartment, setvalues] = useState();


  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setvalues({...apartment, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addApartment()
    console.log(apartment);
  }

  const addApartment = () => { 
    
    fetch("/api/v1/apartments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({apartment}),
    });
  }

  return (
    <>
      <h1>Create A new Apartment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Manager:
          <input type="text" name="manager" onChange={handleChange} />
        </label>
        <br />
        <label>
          Street:
          <input type="text" name="street" onChange={handleChange} />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" onChange={handleChange} />
        </label>
        <br />
        <label>
          email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" onChange={handleChange}/>
        </label>
        <br />
        <label>
          Bedrooms:
          <input type="number" name="bedrooms" onChange={handleChange}/>
        </label>
        <br />
        <label>
          Bathrooms:
          <input type="number" name="bathrooms"onChange={handleChange} />
        </label>
        <br />
        <label>
          Pets:
          <input type="text" name="pets" onChange={handleChange}/>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default NewApartment;