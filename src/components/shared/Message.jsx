import sprite from "../../assets/sprite.svg";

function Message({ message, type }) {
  const msg = (
    <div className="message">
      <div>
        <svg>
          <use href={sprite + "#icon-smile"} />
        </svg>
      </div>
      <p>${message}</p>
    </div>
  );

  const err = (
    <div className="error">
      <div>
        <svg className="icon">
          <use href={sprite + "#icon-alert-triangle"} />
        </svg>
      </div>
      <p>${message}</p>
      <svg className="btn btn__close icon">
        <use href={sprite + "#icon-plus"} />
      </svg>
    </div>
  );

  if (type === "msg") {
    return msg;
  }

  if (type === "err") {
    return err;
  }
}

export default Message;
