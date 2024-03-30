import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProviders";
import Swal from "sweetalert2";
const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    data.preventDefault();
    const form = data.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(email)
        .then(()=>{
          fetch("http://localhost:5000/users", {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(loggedUser),
           })
           .then((res) => res.json())
           .then((data) => {
            if (data.email === email) {
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
        })
          })
        .catch((error) => console.log(error));
      })
  };

  return (
    <div className="hero-content py-20 lg:py-28">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-300">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">SignUp</h1>
          <form onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="my-4 text-center">
            Already Have An Account ?{" "}
            <Link className="text-orange-600 font-bold" to="/log-in">
              LogIn
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
