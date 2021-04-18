import { connect } from 'react-redux';
import { contactsSelectors, filterChange } from '../../redux/contacts/index';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="enter name for search"
    />
  );
};
const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterChange(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
