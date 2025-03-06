import "../css/global.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Book Dashboard</h1>
      <input type="text" placeholder="Search books..." />
    </header>
  );
};

export default Header;