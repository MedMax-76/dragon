import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="header">
          <h1>Dragon</h1>
        </header>
      </div>
      <main className="top">
        <ul className="list">
          <li className="list__item">
            <Link to="/drag1">
              <h2>Drag 1</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag2">
              <h2>Drag 2</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag3">
              <h2>Drag 3</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag4">
              <h2>Drag 4</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag5">
              <h2>Drag 5</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag6">
              <h2>Drag 6</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag7">
              <h2>Drag 7</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag8">
              <h2>Drag 8</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag9">
              <h2>Drag 9</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag10">
              <h2>Drag 10</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag11">
              <h2>Drag 11</h2>
            </Link>
          </li>
          <li className="list__item">
            <Link to="/drag12">
              <h2>Drag 12</h2>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Header;
