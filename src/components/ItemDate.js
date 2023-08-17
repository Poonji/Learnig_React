import './ItemDate.css';

function ItemDate()
{
    const day=10;
    const month="october";
    const year=2001;
    return(<div className="Date">
        <span>{day}</span>
        <span>{month} </span>
        <span>{year}</span>
    </div>);
}
export default ItemDate;