const UserCard = ({ name, username, email }) => {
  return (
    <article className="card">
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{name}</h3>
        <div className="s-main-center">{username}</div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#comprar">
            {email}
          </a>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
