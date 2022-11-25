import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css"
const Statistics=({good,bad,neutral,total,positivePercentage})=>(
    <>
        <div className={css.statistics__list}>
            <p className={css.statistic__item}>Good : {good} </p>
            <p className={css.statistic__item}>Neutral: {neutral}</p>
            <p className={css.statistic__item}>Bad: {bad}</p>
        </div>
        <div className={css.additional__list}>
            <p className={css.additional__item}>Total: {total}</p>
            <p className={css.additional__item}>Positive feedback: {total===0? "100" : Math.round(positivePercentage)}%</p>
        </div>
    </>
)
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  
export default Statistics