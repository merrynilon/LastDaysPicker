import { useMemo, useState } from 'react';
import classes from './LastDaysPicker.module.css';

const LastDaysPicker = ({
  values,
  leftText,
  rightText,
  defaultValue,
  forwardedRef,
  onChange,
  containerClassName
}) => {
  const valuesList = useMemo(
    () => (Array.isArray(values) ? values : [30, 60, 90, 180]),
    [values]
  );
  const firstValue = useMemo(
    () => (defaultValue !== undefined ? defaultValue : 30),
    [defaultValue]
  );
  const [days, setDaysSelector] = useState(firstValue);

  const setDays = (e) => {
    let value = +e.target.textContent;
    if (isNaN(value)) {
      value = e.target.textContent;
    }
    onChange(value);
    setDaysSelector(value);
  };

  return (
    <div
      className={containerClassName ? containerClassName : ''}
      ref={forwardedRef}
    >
      <span className={classes.daysText}>{leftText ? leftText : 'LAST'}</span>
      {valuesList.map((value, i) => (
        <span
          key={`value-${i}`}
          className={`${classes.days} ${
            days === value ? classes.selected : ''
          }`}
          onClick={setDays}
        >
          {value}
        </span>
      ))}
      <span className={classes.daysText}>{rightText ? rightText : 'DAYS'}</span>
    </div>
  );
};

export default LastDaysPicker;
