import React, {ChangeEvent} from 'react';
import './good-search.css';
import { FindProduct } from '../../reducers/cash-reducer/cash-reducer';
import {connect} from "react-redux";
import { AppState } from '../../types/app';

type Props = {
  value: string;
  onChange: (value: string) =>void;
}

const GoodSearch = ({value, onChange}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  return (
    <form>
      <input className="input-search" placeholder="Поиск" value={value} onChange={handleChange}></input>
    </form>
  );
};

const mapStateToProps = (state: AppState) => ({
  value: state.cash.filter,
});

const mapDispatchToProps =  {
  onChange: FindProduct,
};

export {GoodSearch};
export default connect(mapStateToProps, mapDispatchToProps)(GoodSearch)