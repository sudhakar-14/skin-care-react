import React from 'react'
import css from './Footer.module.css'
import Logo from '../../img/logo.png'
// import {
//     InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon
// } from '@heroicons/react/20/solid'
import {
  HiOutlineMail,HiOutlineLocationMarker,HiOutlineLogin,HiOutlinePhone,HiOutlineUsers,HiOutlineLink, HiPhoneIncoming
} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
              <img src={Logo} alt="logo" />
              <span>amazon</span>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Contact US</span>
                <span className={css.pngLine}>
                  <HiOutlineLocationMarker className={css.icon} />
                  <span>111 north avenue Ornaldo, FL 32801</span>
                </span>
                <span className={css.pngLine}>
                  <HiPhoneIncoming className={css.icon} />
                  <a href='tel:352-306-4415'>353-306-4415</a>
                </span>
                <span className={css.pngLine}>
                  <HiOutlineMail className={css.icon} />
                  <a href='mailto:support@amazon.com'>support@amazon.com</a>
                </span>
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Account</span>
                <div className={css.pngLine}>
                  <HiOutlineLogin className={css.icon} />
                  Sign In
                </div>
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Company</span>
                <div className={css.pngLine}>
                  <HiOutlineUsers className={css.icon} />
                  <a href="\about">
                    <p>About us</p>
                  </a>
                </div>
              </div>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Resources</span>
                <div className={css.pngLine}>
                  <HiOutlineLink className={css.icon} />
                  <p>Safety privacy & Terms</p>
                </div>
              </div>
            </div>
        </div>
        <div className={css.copyRight}>
          <span>Copyright &#169;2022 by Amazon, Inc.</span>
          <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer