import { Link } from "react-router-dom";
import "../../styles/main.scss";

const Header: React.FC = () => {
  return (
    <nav>
      <Link to="/">Календарь</Link>
      <Link to="/new">Добавить событие</Link>
    </nav>
  );
};

export default Header;
