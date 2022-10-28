import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="box py-4 h-full bg-primary">
        <Link
          to="/"
          className="block bg-logo bg-center bg-no-repeat bg-cover w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Navbar;
