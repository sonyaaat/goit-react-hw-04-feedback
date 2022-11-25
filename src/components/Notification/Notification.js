import PropTypes from 'prop-types';
const Notification=({message})=>{
    return(
<h1 style={{textAlign:"center",color:"red"}}>{message}</h1>)
}
export default Notification
Notification.propTypes={
message:PropTypes.string
}