import "./Login.scss";

const Login = () => {
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
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
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
