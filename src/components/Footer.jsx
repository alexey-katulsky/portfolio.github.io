import React from 'react';
import '../styles/components/footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <address>
              <a href='mailto:alexeykatulsky@gmail.com' target='_self'>
                alexeykatulsky@gmail.com
              </a>
            </address>
            <span>designed and developed by Alexey Katulsky</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
