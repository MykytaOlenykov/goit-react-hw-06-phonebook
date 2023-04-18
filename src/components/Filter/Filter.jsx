import PropTypes from 'prop-types';
import * as S from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <S.Input onChange={onChange} value={value} name="filter" type="text" />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
