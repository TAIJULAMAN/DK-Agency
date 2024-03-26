// import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Authentication/AuthProvider";
// import Button from "../../Custom/Button";

const LogIn = () => {
//   const [, setError] = useState("");
//   const [, setSuccess] = useState("");
//   const { signIn } = useContext(AuthContext);

//   const handleSignIn = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     setError("");
//     setSuccess("");
  
//     signIn(email, password)
//       .then((result) => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         if (!loggedUser.emailVerified) {
//           alert("please verify your mail");
//         }
//         setSuccess("User login successful.");
//         setError("");
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

  return (
    <div className="hero-content py-32">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-300">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">LogIn</h1>
          {/* <form onSubmit={handleSignIn}> */}
          <form>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                type="text"
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
            {/* <div className="form-control my-5 flex justify-center items-center">
            <Button title='LogIn'/>
            </div> */}
             <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="LogIn" />
            </div>
          </form>
          <p className="my-4 text-center">
            Do Not Have An Account ?{" "}
            <Link className="text-orange-600 font-bold" to="/sign-up">
              SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;