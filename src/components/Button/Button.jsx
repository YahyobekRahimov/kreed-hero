import "./Button.scss";

function Button(props) {
   const { classes, onClick, name } = props;
   return (
      <button className={classes} onClick={onClick}>
         {name}
      </button>
   );
}

export default Button;
