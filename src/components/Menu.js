import * as Icon from "react-feather";
import useContextMenu from "../hooks/useContextMenu";

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  return (
    <div>
     {show && <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className="menu__item">Share</li>
        <li className="menu__item">Cut</li>
        <li className="menu__item">Copy to</li>
        <li className="menu__item">Download</li>
        <hr className="divider"/>
        <li className="menu__item">Refresh</li>
        <li className="menu__item">Delete</li>
      </ul>}
    </div>
  );
};

export default Menu;
