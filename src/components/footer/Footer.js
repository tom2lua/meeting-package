import React from 'react'
import Logo from '../../assets/Logo.png'

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerColumn">
        <div className="hyperlinksTitle">Solution</div>
        <div>
          <a className="footerLinks" href="*">
            Hotel Chains
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Independent Hotels
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Partners
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Unique Venues and Event spaces
          </a>
        </div>
      </div>
      <div className="footerColumn">
        <div className="hyperlinksTitle">Products</div>
        <div>
          <a className="footerLinks" href="*">
            Online Book Engine
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Global Distribution System
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Sales & Catering
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Intergrations
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Analytics
          </a>
        </div>
      </div>
      <div className="footerColumn">
        <div className="hyperlinksTitle">More</div>
        <div>
          <a className="footerLinks" href="*">
            Company
          </a>
        </div>
        <div>
          <a className="footerLinks" href="*">
            Contact
          </a>
        </div>
      </div>
      <span className="footerLogo">
        <img src={Logo} alt="Logo"></img>
      </span>
    </div>
  )
}

export default Footer
