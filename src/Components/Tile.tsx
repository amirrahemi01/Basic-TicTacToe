type Props = {
    className : any;
    value : any;
    onClick : any;
    userTurn : any;
}

const Tile = ({className, value, onClick, userTurn}: Props) => {

    let hoverClass = null;
    if (value == null && userTurn != null) {
        hoverClass = `${userTurn.toLocaleLowerCase()}-hover`;
    }

  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
    </div>
  )
}

export default Tile