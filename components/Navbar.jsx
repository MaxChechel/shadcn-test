import NavMenu from "./NavMenu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Logo</div>
      <NavMenu />
      <Button>Get started</Button>
    </div>
  );
};

export default Navbar;
