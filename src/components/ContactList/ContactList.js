import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFiltrValue } from 'redux/selectors';
import { ContList, ContItem, ListBtn } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const filterValue = useSelector(getFiltrValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const normalizedFilter = filterValue.toLowerCase();

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContList>
      {contacts.length > 0 &&
        filterContactList.map(({ id, name, number }) => {
          return (
            <ContItem key={id}>
              {name}: {number}
              <ListBtn
                onClick={() => dispatch(deleteContact(id))}
                id={id}
                type="button"
              >
                delete
              </ListBtn>
            </ContItem>
          );
        })}
    </ContList>
  );
};
export default ContactList;
