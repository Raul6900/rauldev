import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed & Built by Raul Prahoveanu © {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;