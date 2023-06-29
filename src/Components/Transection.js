import Item from "./Item";
import './Transection.css'
import { v4 as uuidv4 } from 'uuid';

const Transection = () => {
    const data = [
        {title: "ค่ารักษาพยาบาล", amount: 6000},
        {title: "ค่าน้ำมัน", amount: 5000},
        {title: "ค่าเช่าบ้าน", amount: 8000},
        {title: "เงินเดือน", amount: 100000},
        {title: "ค่างวดรถ", amount: 12000},
        {title: "ค่าเดินทาง", amount: 3000},
    ]
    return (
      <ul className="item-list">
        {data.map((element) => {
            // return <Item title={element.title} amount={element.amount}/>
            return <Item {...element} key={uuidv4()}/>
        })}
        </ul>
    );
  }

  export default Transection