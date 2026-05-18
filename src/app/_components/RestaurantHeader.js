import Link from "next/link";

const RestaurantHeader = () => {
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
        <li className="header-li">
          <Link href="/">Login/SignUp</Link>
        </li>
        <li className="header-li">
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
