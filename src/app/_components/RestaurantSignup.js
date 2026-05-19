"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RestaurantSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const handleSignUp = async (formData) => {
    console.log(formData);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    response = await response.json();
    console.log(response);
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h3>Sign Up</h3>
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
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            {...register("c_password", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.c_password && (
            <p style={{ color: "red" }}>{errors.c_password.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant Name"
            {...register("name", {
              required: "Name is required",
              pattern: { message: "Name is required" },
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant City"
            {...register("city", {
              required: "City is required",
              pattern: { message: "City is required" },
            })}
          />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant Address"
            {...register("address", {
              required: "Address is required",
              pattern: { message: "Address is required" },
            })}
          />
          {errors.address && (
            <p style={{ color: "red" }}>{errors.address.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant Number"
            {...register("number", {
              required: "Number is required",
              pattern: { message: "Number is required" },
            })}
          />
          {errors.number && (
            <p style={{ color: "red" }}>{errors.number.message}</p>
          )}
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSubmit(handleSignUp)}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
