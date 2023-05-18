import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import * as S from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <S.Input
        onChange={handleChange}
        value={filter}
        name="filter"
        type="text"
      />
    </>
  );
};
