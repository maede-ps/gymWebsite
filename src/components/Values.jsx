import SectionHeader from "./SectionHeader"
import {values} from '../data'
import Card from "../UI/Card"
import image from '../Images/values.jpg'
import {BiDiamond} from 'react-icons/bi'


function Values() {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={image} alt="values Image"/>
                </div>
            </div>
            <div className="values__right">
                <SectionHeader icon={<BiDiamond/>} title="values"/>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsum?
                    Harum, magnam voluptatibus iure velit maiores maxime sapiente sunt nesciunt?
                </p>
                <div className="values__wrapper">
                    {values.map(({id,icon,title, desc})=>{
                        return <Card className={"values__value"} key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values