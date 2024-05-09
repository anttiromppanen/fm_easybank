import Container from "../Container";
import logoImg from "../../assets/images/logo.svg";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

function AppBar() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <img src={logoImg} alt="Logo" />
          <nav className="">
            <ul className="text-userGrayishBlue flex text-sm font-light">
              {links.map((x) => (
                <li className="relative" key={x}>
                  <button type="button" className="peer p-4">
                    {x}
                  </button>
                  <div className="bg-userLimeGreen absolute -bottom-4 left-0 hidden h-1 w-full peer-hover:block" />
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="from-userLimeGreen to-userBrightCyan rounded-full bg-red-500 bg-gradient-to-r px-7 py-2 font-medium text-white"
          >
            Request Invite
          </button>
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
