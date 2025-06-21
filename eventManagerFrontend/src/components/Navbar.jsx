import "../cssFiles/navbarCss.css";

const Navbar = ({ children }) => {
  return (
    <>
      <header>
        <div className="logo">EventManager</div>
        {children}
      </header>
    </>
  );
};

export default Navbar;
