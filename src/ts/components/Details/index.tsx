import React from "react";
import "./modal.scss";

type ModalProps = { user: User; closeAction: () => void };

const Details: React.FC<ModalProps> = ({ user, closeAction }) => {
  const closeModal = (e: any) => {
    if (e.target.id === "modal") {
      closeAction();
    }
  };
  return (
    <div className="modal" id="modal" onClick={closeModal}>
      <button type="button" onClick={closeAction}>
        +
      </button>
      <div className="content">
        <div className="user">
          <div className="user__img medium">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
          </div>
          <div className="user__details">
            <p>{user.login.username}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Cell: {user.cell}</p>
            <p>
              <strong>Address:</strong>
            </p>
            <p>
              {typeof user.location.street === "string"
                ? user.location.street
                : `${user.location.street.number} ${user.location.street.name}`}
            </p>
            <p>city: {user.location.city}</p>
            <p>state: {user.location.state}</p>
            <p>postcode: {user.location.postcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
