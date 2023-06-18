import { useState, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { login, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('user', user);
    debugger
    if(!user) {
      return;
    }

    if (user.role === "ADMIN") {
      return navigate("/defaulters");
    }

    if (user.role === "USER") {
      return navigate("/");
    }
  }, [user?.role, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(inputs);
  };

  return (
    <div className="login">
      <section>
        <div className="banner-content">
          <h2>My Store</h2>
          <p>
            Welcome to our ecommerce app! Here you can find the best deals on
            your favorite products and brands.
          </p>
        </div>
      </section>
      <section>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name={inputs.username}
              id="username"
              onChange={({ target }) =>
                setInputs((prevState) => ({
                  ...prevState,
                  username: target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name={inputs.password}
              id="password"
              onChange={({ target }) =>
                setInputs((prevState) => ({
                  ...prevState,
                  password: target.value,
                }))
              }
            />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" name="Rememberme" id="Rememberme" />
            <label htmlFor="Rememberme">Remember me</label>
          </div>
          <button>Sign In</button>
          <p className="bottom-message">Need help siging in?</p>
        </form>
      </section>
    </div>
  );
};

export { Login };
