import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  
  return <section className='hero'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1> Payments  infrastructure for the Internet</h1>
        <p>
          These are online services that act as intermediaries between merchants and customers, enabling the processing of electronic payments. Payment gateways securely transmit transaction data, authorize payments, and transfer funds between the customer's account and the merchant's account.
        </p>
        <button className='btn'>Start Now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt='phone'/>
             </article>

    </div>
    </section>
}

export default Hero
