import PropTypes from 'prop-types';

import s from './filter.module.scss';

export default function Filter({ onChange }) {
  return (
    <div className={s.container}>
      <label className={s.title}>Filter by name</label>
      <input type="text" onChange={onChange} className={s.input_filter}></input>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
