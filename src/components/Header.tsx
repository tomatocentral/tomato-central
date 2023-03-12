const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">tomato-central</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full bg-red-500"></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
