import "../cssFiles/navbarCss.css";

const Navbar = ({ setIsAddingOpened }) => {
  return (
    <>
      <header>
        <div className="logo">EventManager</div>
        <div className="nav-links">
          <button onClick={() => setIsAddingOpened(true)}>Add Event</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
