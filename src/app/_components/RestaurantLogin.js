"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RestaurantLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const handleLogin = async (formData) => {
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ ...formData, login: true }),
    });

    response = await response.json();
    console.log(response);
    if (response.success && response.result) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <h3>Login</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Email Id"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSubmit(handleLogin)}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
