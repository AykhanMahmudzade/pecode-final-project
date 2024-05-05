import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='foter'>
        <div className="footer container py-5">
        <div className="row">
            <div className="col-12 col-md-4">
                <img src="/assets/images/footer.svg" alt="" />
            </div>


            <div className="col-12 col-md-4 text-white">
                <h4 className='contact'>Contact Us</h4>

                <div className="mail">
                    <p className="text-secondary">If you want to implement your business ideas: </p>
                    <a className="text-white text-decoration-none" href="mailto:hello@pecodesoftware.com">hello@pecodesoftware.com</a>
                </div>

                <div className="mail">
                    <p className="text-secondary pt-4">If you are looking for new career opportunities: </p>
                    <a className="text-white text-decoration-none" href="mailto:career@pecodesoftware.com">career@pecodesoftware.com</a>
                </div>
            </div>

        <div className="col-12 col-md-4 text-white">
      <h4 className='follow ms-3 pb-4'>Follow us</h4>

      <div className="icons col-12 col-md-4 d-flex gap-4">


<a href=""><img src="./public/assets/icons/ig.svg" alt="" /></a>
<a href=""><img src="./public/assets/icons/behance.svg" alt="" /></a>
<a href=""><img src="./public/assets/icons/linkedin.svg" alt="" /></a>
<a href=""><img src="./public/assets/icons/moon.svg" alt="" /></a>
<a href=""><img src="./public/assets/icons/ball.svg" alt="" /></a>




      </div>

<div className="adress">
    <address className='ms-3 pt-5'>Akademika Andriya Sakharova <br />St, 37, Lviv, Lviv Oblast, Ukraine, <br /> 79000 </address>
</div>

     
        </div>

        </div>
        <p className='text-white text-center pt-5'> &copy; {new Date().getFullYear()} Pecode Software</p>
        </div>
        
    </div>
  )
}

export default Footer