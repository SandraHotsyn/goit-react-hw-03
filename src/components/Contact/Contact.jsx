import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <li className={css.item}>
      <div>
        <div className={css.flex}>
          <AiOutlineUser className={css.icon} />
          <p>{contact.name}:</p>
        </div>

        <div className={css.flex}>
          <AiOutlinePhone className={css.icon} />
          <p> {contact.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
