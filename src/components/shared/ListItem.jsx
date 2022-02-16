import sprite from "../../assets/sprite.svg";

function ListItem({ text, icon }) {
  return (
    <li className="nav__list-item">
      {icon && (
        <svg className="icon">
          <use href={sprite + icon} />
        </svg>
      )}
      <h4 className="heading heading__4">{text}</h4>
    </li>
  );
}

export default ListItem;
