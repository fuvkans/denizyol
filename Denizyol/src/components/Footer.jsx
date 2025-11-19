import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Denizyol</h3>
          <p className="footer-text">
            Alışveriş deneyiminizi kolaylaştıran modern e-ticaret platformu.
          </p>
        </div>

        <div className="footer-section">
          <h4>Bağlantılar</h4>
          <ul>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/">Ürünler</a>
            </li>
            <li>
              <a href="/">İletişim</a>
            </li>
            <li>
              <a href="/">Hakkımızda</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>İletişim</h4>
          <p>Email: info@denizyol.com</p>
          <p>Telefon: +90 555 555 55 55</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Denizyol. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
