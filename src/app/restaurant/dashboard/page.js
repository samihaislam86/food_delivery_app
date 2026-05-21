'use client'
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import './../style.css'
import AddFoodItem from "@/app/_components/AddFoodItem";
import FoodItemList from "@/app/_components/FoodItemList";
import { useState } from "react";
const Dashboard=()=>{
    const [addItem, setAddItem] = useState(false);
    
    return(
        <>
        <RestaurantHeader/>
        <button onClick={()=>setAddItem(true)}>Add Food Item</button>
        <button onClick={()=>setAddItem(false)}>Dashboard</button>
        
        {
            addItem ?<AddFoodItem/>:<FoodItemList/>
        }
               
        </>
    )
}

export default Dashboard;