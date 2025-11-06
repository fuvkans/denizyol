import React, { useState, useEffect } from "react";

export default function Account() {
  const [isLoginView, setIsLoginView] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ type: "", content: "" });

  useEffect(() => {
    const user = localStorage.getItem("current_user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      setMessage({ type: "danger", content: "Lütfen tüm alanları doldurun." });
      return;
    }

    const users = JSON.parse(localStorage.getItem("app_users") || "[]");

    const userExists = users.find((user) => user.email === registerData.email);
    if (userExists) {
      setMessage({ type: "danger", content: "Bu email adresi zaten kayıtlı." });
      return;
    }

    const newUser = {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password, // Gerçek bir projede şifreyi hash'lemelisiniz!
    };
    users.push(newUser);

    localStorage.setItem("app_users", JSON.stringify(users));

    localStorage.setItem("current_user", JSON.stringify(newUser));
    setCurrentUser(newUser);

    setMessage({ type: "success", content: "Kayıt başarılı! Hoş geldiniz." });
    setRegisterData({ username: "", email: "", password: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setMessage({ type: "danger", content: "Lütfen tüm alanları doldurun." });
      return;
    }

    const users = JSON.parse(localStorage.getItem("app_users") || "[]");

    const foundUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (foundUser) {
      localStorage.setItem("current_user", JSON.stringify(foundUser));
      setCurrentUser(foundUser);
      setMessage({
        type: "success",
        content: `Hoş geldin, ${foundUser.username}!`,
      });
      setLoginData({ email: "", password: "" });
    } else {
      setMessage({ type: "danger", content: "Email veya şifre hatalı." });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("current_user");
    setCurrentUser(null);
    setMessage({ type: "", content: "" });
  };

  if (currentUser) {
    return (
      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-user-check fa-3x text-success mb-3"></i>
                <h2 className="card-title">
                  Hoş Geldin, {currentUser.username}!
                </h2>
                <p className="card-text">Hesap sayfanıza giriş yaptınız.</p>
                <button className="btn btn-danger" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt me-2"></i>Çıkış Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {message.content && (
            <div className={`alert alert-${message.type}`} role="alert">
              {message.content}
            </div>
          )}

          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs nav-fill">
                <li className="nav-item">
                  <button
                    className={`nav-link ${isLoginView ? "active" : ""}`}
                    onClick={() => {
                      setIsLoginView(true);
                      setMessage({ type: "", content: "" });
                    }}
                  >
                    Giriş Yap
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${!isLoginView ? "active" : ""}`}
                    onClick={() => {
                      setIsLoginView(false);
                      setMessage({ type: "", content: "" });
                    }}
                  >
                    Kayıt Ol
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              {isLoginView ? (
                <form onSubmit={handleLogin}>
                  <h5 className="card-title text-center mb-4">
                    Hesabınıza Giriş Yapın
                  </h5>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Şifre"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="fas fa-sign-in-alt me-2"></i>Giriş Yap
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister}>
                  <h5 className="card-title text-center mb-4">
                    Yeni Hesap Oluştur
                  </h5>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kullanıcı Adı"
                      name="username"
                      value={registerData.username}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Şifre"
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    <i className="fas fa-user-plus me-2"></i>Kayıt Ol
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
