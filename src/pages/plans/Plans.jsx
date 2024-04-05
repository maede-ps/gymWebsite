import React from 'react'
import './Plans.css'
import Header from '../../components/Header'
import image from '../../Images/values.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'


function Plans() {
  return (
    <>
    <Header title="Membership Plans" image={image}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, esse.
      Voluptatum quibusdam ad, repellat eum nulla libero dolorem est blanditiis!
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, avalailable},index)=>{
                  return <p key={index} className={!avalailable ? 'disabled' : ' '}>
                    {feature}
                  </p>
                })
              }

              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans