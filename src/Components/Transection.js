import Item from "./Item";
import './Transection.css'

const Transection = () => {
    const data = [
        {id:1, title: "ค่ารักษาพยาบาล", amount: 6000},
        {id:2, title: "ค่าน้ำมัน", amount: 5000},
        {id:3, title: "ค่าเช่าบ้าน", amount: 8000},
        {id:4, title: "เงินเดือน", amount: 100000},
        {id:5, title: "ค่ารถ", amount: 12000},
        {id:6, title: "ค่าเดินทาง", amount: 3000},
    ]
    return (
      <ul className="item-list">
        {data.map((element) => {
            // return <Item title={element.title} amount={element.amount}/>
            return <Item {...element} key = {element.id}/>
        })}
        </ul>
    );
  }

  export default Transection