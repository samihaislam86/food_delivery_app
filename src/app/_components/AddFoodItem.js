"use client";
import { useForm } from "react-hook-form";

const AddFoodItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddItem = async (formData) => {
    console.log(formData);
    let resto_id;
    const restaurantData=JSON.parse(localStorage.getItem("restaurantUser"))
    if(restaurantData){
        resto_id=restaurantData._id
    }
    let response=await fetch("http://localhost:3000/api/restaurant/foods",{
        method:"POST",
        body:JSON.stringify({...formData, resto_id}),
    })
    response=await response.json();
    if (response.success){
        alert("Food item added successfully!!")

    }
    };

  return (
    <div className="container">
      <h1>Add a food item</h1>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Food Name"
          {...register("name", { required: "Food name is required!!" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Food Price"
          {...register("price", { required: "Food price is required!!" })}
        />
        {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Food Description"
          {...register("description", {
            required: "Description is required!!",
          })}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
        )}
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Food imgURL"
          {...register("imgURL", { required: "Image URL is required!!" })}
        />
        {errors.imgURL && (
          <p style={{ color: "red" }}>{errors.imgURL.message}</p>
        )}
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleSubmit(handleAddItem)}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
