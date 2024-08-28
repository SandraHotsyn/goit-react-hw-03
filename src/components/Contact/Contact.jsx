import PropTypes from "prop-types";

export default function Contact({ contact }) {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
