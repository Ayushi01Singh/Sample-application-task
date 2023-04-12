import React from "react"
import imag from '../images/home.jpg'
import Back from "./hero/back"
import "./contact.css"

function Contact (){
  return (
    <>
      <section className='contact mb'>
        {/* <Back name='Contact Us' title='Get Helps & Friendly Support' cover={imag} /> */}
        {/* <img src={imag}></img> */}
        <div className='container'>
          <form className='shadow'>
            {/* <h4>Fillup The Form</h4> <br /> */}
            <div>
            <h4>Fillup The Form</h4> <br />
              <input type='text' placeholder='Name' /><br></br>
              <input type='text' placeholder='Email' /><br></br>
            <input type='text' placeholder='Subject' /><br></br>
            </div>
            {/* <textarea cols='30' rows='10'></textarea> */}
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;