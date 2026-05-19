
'use client'
import Link from "next/link";
import { useRouter ,usePathname} from "next/navigation";
import { useEffect, useState } from "react";


const RestaurantHeader = () => {
  const [details,setDetails]=useState();
  const router=useRouter();
  const pathname=usePathname();

  useEffect(()=>{
    let data=localStorage.getItem("restaurantUser");
    if(!data && pathname =="/restaurant/dashboard"){
      router.push("/restaurant")
    }else if(data && pathname =="/restaurant"){
      router.push("/restaurant/dashboard");
    }else{
      setDetails(JSON.parse(data))
    }
  },[])

  const handleLogout=()=>{
    localStorage.removeItem("restaurantUser")
    router.push("/restaurant")
  }

  return (
    <div className="header-wrapper">
      <div className="logo">
        {/* <img style={{ width: 100 }} src="" /> */}
        <h1>img</h1>
      </div>
      <ul className="header-ul">
        <li className="header-li">
          <Link href="/">Home</Link>
        </li>
        {
          details && details.name?
          <>
          <li className="header-li">
          <Link href="/">Profile</Link></li>
          <li className="header-li">
            <button className="header-button" onClick={handleLogout}>
              <Link href="/">Logout</Link>
            </button>
          </li>

        
          
          </>
          
        :<li className="header-li">
          <Link href="/">Login/SignUp</Link>
        </li>
        }
        
        
      </ul>
    </div>
  );
};

export default RestaurantHeader;
