import PropTypes from 'prop-types';
import { ItemCont, BtnContItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemCont id={id}>
      {name}: {phone}
      <BtnContItem type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnContItem>
    </ItemCont>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
