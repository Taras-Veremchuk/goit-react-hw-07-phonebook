import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFiltr = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input type="text" onChange={changeFiltr} />
    </Label>
  );
};
export default Filter;
