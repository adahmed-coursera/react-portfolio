import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer py-5 bg-dark'>
      <div className='container'>
        <div className='footer-content text-white grid'>
          <div className='footer-item text-center'>
            <h5 className='fs-17 fw-6'>Links</h5>
            <ul>
              <li>
                <a href='/about' className='fs-15'>About Us</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Contact</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Blog</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Data policy</a>
              </li>
            </ul>
          </div>
          <div className='footer-item text-center'>
            <h5 className='fs-17 fw-6'>About Shopping Hub</h5>
            <ul>
              <li>
                <a href='/about' className='fs-15'>Company Info</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Branches</a>
              </li>
              <li>
                <a href='/about' className='fs-15'>Store</a>
              </li>
            </ul>
          </div>
          <div className='footer-item text-center'>
            <h6 className='fs-17 fw-6'>Contact</h6>
            <ul>
              <li>
                <span>
                  <i className='fas fa-phone'>+59345 43534</i>
                </span>
              </li>
              <li>
                <span>
                  <i className='fas fa-envelope'>info@shoppinghub.com</i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer