
import React from 'react';

function Footer(){
    return(
        <div className='footer'>
            
            <div className='iconos-f'>
                <a href="https://www.twitter.com/dg" target='_black'><img className='icon-f' src="twitter.png" alt="" />  </a>
                <a href="https://www.instagram.com/dg" target='_black'><img  className='icon-f'  src="instagram.png" alt="" />  </a>
                <a href="https://www.github.com/delfige" target='_black'><img className='icon-f'  src="github.png" alt="" />  </a>
                <a href="#" target='_black'><img className='icon-f'  src="correo-negro.png" alt="" />  </a>
                <a href="#" target='_black'><img className='icon-f'  src="whatsapp.png" alt="" />  </a>
            </div>
            <p className='p-footer'>Delfina Gerea © 2024</p>
        </div>
    );
}
export default Footer;