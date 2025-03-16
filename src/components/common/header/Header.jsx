import React, { useLayoutEffect, useRef, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './header.css';
import { CartContext } from '../../context/CartContext';

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    // Xóa các ScrollTrigger cũ trước khi tạo mới
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (location.pathname === '/') {
      gsap.fromTo(headerRef.current, 
        { y: -100 }, 
        { y: 0, duration: 1, ease: "power2.out" }
      );

      ScrollTrigger.create({
        trigger: '.HAbout',
        start: "top top",
        end: 'bottom top',
        toggleActions: "play none none reverse"
      });
    }
  }, [location.pathname]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <header className="header" ref={headerRef}>
      <nav>
        <div className="logo">
          <Link to="/"><img src="https://cdn.prod.website-files.com/675aa54ab7168d05ec81c87c/675b9deb1af862f5af1f7e72_Brand%20Velvet%20Shaker.svg" alt="" /></Link>
        </div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/menu">menu</Link></li>
          <li><Link to="/shop">shop</Link></li>
          <li onClick={toggleCart} className='cart-btn'>cart</li>
          {isCartOpen && (
            <div className={`cart-popup ${isCartOpen ? 'show' : ''}`}>
              <div className="cart-heading">
                <h5>Your Cart</h5>
              </div>
              <div className="items">
                {cart.length === 0 ? (
                  <p className="no-items">No items found</p>
                ) : (
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <div className="image">
                          <img src={item.pic} alt="" />
                        </div>
                        <div className="info">
                          <p className="name">{item.name}</p>
                          <p className="price">${item.price}</p>
                          <p
                            className="remove"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </p>
                        </div>
                        <div className="quantity">
                          <p>{item.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="total">
                <p>Subtotal</p>
                <p className='totalPrice'>${getTotalPrice()} USD</p>
              </div>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
