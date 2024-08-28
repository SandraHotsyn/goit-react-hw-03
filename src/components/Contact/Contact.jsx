import PropTypes from "prop-types";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
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
