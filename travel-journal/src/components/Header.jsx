import flyingIcon from "../imgs/flying.png";

export default function Header() {
  return (
    <header>
      <nav>
        <span className="headerItems">
          <img className="icon" src={flyingIcon} alt="flying aeroplane icon" />
          <span>
            <h2>My Travel Journal</h2>
          </span>
        </span>
      </nav>
    </header>
  );
}
