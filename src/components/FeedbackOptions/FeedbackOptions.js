import PropTypes from 'prop-types';
import css from "../FeedbackOptions/FeedbackOptions.module.css"
import { BsFillHandThumbsUpFill,BsFillHandThumbsDownFill,BsFillHexagonFill } from "react-icons/bs";
const FeedbackOptions=({options,onLeaveFeedback})=>
{
    return(
        <div className={css.buttons__list}>
            <button type="button" className={css.button} onClick={()=>onLeaveFeedback(options[0])}><BsFillHandThumbsUpFill className={css.icon}/>Good</button>
            <button type="button" className={css.button} onClick={()=>onLeaveFeedback(options[1])}><BsFillHexagonFill className={css.icon}/>Neutral</button>
            <button type="button" className={css.button} onClick={()=>onLeaveFeedback(options[2])}><BsFillHandThumbsDownFill className={css.icon}/>Bad</button>
        </div>
    )
}
export default FeedbackOptions
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };