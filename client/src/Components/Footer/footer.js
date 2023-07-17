import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='Subscribe'>
                <button><h1>Подробнее о подписках</h1></button>
            </div>
            <div className='center_footer'>
            </div>
            <div className='right_footer'>
                <h1>Поддержка:</h1>
                <p> +7-929-123-45-67 </p>
            </div>
        </div>
    );
}

export default Footer;
