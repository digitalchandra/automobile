import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold">
          Image Converter
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/png-to-jpeg" className="hover:underline">
                PNG to JPEG
              </Link>
            </li>
            <li>
              <Link to="/jpeg-to-png" className="hover:underline">
                JPEG to PNG
              </Link>
            </li>
            <li>
              <Link to="/webp-to-jpeg" className="hover:underline">
                WEBP to JPEG
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
