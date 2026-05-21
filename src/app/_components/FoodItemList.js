import React, { useEffect, useState } from "react";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    LoadFoodItems();
  }, []);

  const LoadFoodItems = async () => {
    const restaurantData=JSON.parse(localStorage.getItem("restaurantUser"));
    const resto_id=restaurantData._id

    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/${resto_id}`
    );
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result);
    } else {
      alert("Food Item list not Loading!!");

    }
  };

  const handleEditItem=()=>{
    alert("Are you sure You want to edit this item??")
  }

  const handleDeleteItem=()=>{
    alert("Are you sure You want to delete this item??")

  }

  return (
    <div className="food-table">
      <h1 style={{ textAlign: "center" }}>Food item list</h1>
      <table className="table">
        <thead>
          <tr>
            <td>SL NO.</td>
            <td>Food Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td><img src={item.imgURL} alt={item.name} /></td>
              <td>
                <button className="edit-button" onClick={handleEditItem}>Edit</button>
                <button className="delete-button" onClick={handleDeleteItem}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
