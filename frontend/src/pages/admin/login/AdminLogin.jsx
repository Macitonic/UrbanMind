import "./adminLogin.css";

const AdminLogin = () => {
  return (
    <div className="login-container">
      <form action="http://localhost:5000/admin-login" method="post">
        <input type="email" placeholder="Enter Your Email" name="adminEmail" />
        <input type="password" placeholder="Paswword" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
