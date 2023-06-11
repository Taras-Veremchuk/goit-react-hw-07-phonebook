import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { ContList, ContItem, ListBtn } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import Loader from 'components/loader/loader';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContList>
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <p>Oops! Something went wrong.</p>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContItem key={id}>
              {name}: {number}
              <ListBtn
                onClick={() => dispatch(deleteContact(id))}
                id={id}
                type="button"
              >
                Delete
              </ListBtn>
            </ContItem>
          );
        })}
    </ContList>
  );
};
export default ContactList;
