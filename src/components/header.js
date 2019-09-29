import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import welgeeLogo from '../images/logo3.png'

const navbarData = [
  {
    menuTitle: 'WELgeeとは',
    subMenu: [
      {
        title: '私たちの想い',
        url: ''
      },
      {
        title: '応援の声',
        url: ''
      }
    ]
  },
  {
    menuTitle: '事業内容',
    subMenu: [
      {
        title: '就労伴走事業',
        url: ''
      },
    ]
  },
  {
    menuTitle: '参加しませんか？',
    subMenu: [
      {
        title: '寄付をする',
        url: ''
      },
      {
        title: 'WELgeeをもっと知る',
        url: ''
      },
      {
        title: 'イベントに参加する',
        url: ''
      },
      {
        title: 'インターン・プロボノとして参画する',
        url: ''
      },
      {
        title: 'あなたのアイディアをお聞かせください',
        url: ''
      },
      {
        title: 'あなたのアイディアをお聞かせください',
        url: ''
      }
    ]
  },
  {
    menuTitle: 'News',
    url: '/news',
    subMenu: []
  },
  {
    menuTitle: 'English',
    subMenu: []
  },
]


const Header = ({ siteTitle }) => (
  <header className="container">
      <div>
        <div className="logo-box">
          <img className="logoImg" src={welgeeLogo} />
        </div>
        <div className="menuBox">
          <ul className="menu">
            {navbarData.map((menu, i) => (
              <li key={i} className="menu-item">
                {menu.url
                  ? <Link to={menu.url}>{menu.menuTitle}</Link>
                  : <p className="menuTitle">{menu.menuTitle}</p>
                }
                <ul className="submenu">
                  {menu.subMenu.map((subList, k) => (
                    <li key={k}>
                      <p>
                        <i className="fa fa-angle-right"></i>
                        <span>
                          <Link to={subList.url} style={{textDecoration: 'none', color: 'black'}} >
                            {subList.title}
                          </Link>
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="socialMedia">
            <i className="fa fa-facebook-f" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
          </div>
        </div>
      </div>
      <style jsx={true}>{`
        .container {
          margin: 1rem 0 0 0;
          padding: 0;
          border-bottom: 3px solid orange;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .logoImg {
          width: 8rem
        }
        .logo-box {
        }
        .menuBox {
          display: flex;
        }
        .menu {
          list-style: none;
          display: flex;
          margin: 0;
          width: 60rem;
        }
        .menu-item {
          display: flex;
          align-content: center;
          justify-content: center;
          width: 100%;
          padding: 1rem 0;
          font-weight: bold;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        .menu-item:hover {
          background: #f4f4f4;
        }
        .menuTitle {
          width: 100%;
          border-left: 1px solid #eaeaea;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        .submenu {
          display: none;
          padding: 0;
          margin: 0 0 0 3rem;
          list-style: none;
          position: absolute;
          top: 9.7rem;
          font-weight: 400;
          width: 15rem;
          padding-bottom: 10;
        }
        .submenu li {
          width: 100%;
          margin: 0;
          padding: 0 1rem;
          background: #f4f4f4;
        }
        .submenu p span {
          margin-left: 1rem;
        }
        .submenu p i {
          margin-top: 0.2rem;
          font-size: 1rem;
          font-weight: bold;
        }
        .submenu li:first-child {
          border-top: 1px solid #d6d6d6;
        }
        .submenu li:hover {
          background: #e1e1e1;
        }
        .submenu li p {
          border-bottom: 1px solid #d6d6d6;
          width: 100%;
          padding: 1rem 0;
          margin: 0;
          font-size: 0.85rem;
          display: flex;
          line-height: 1.5rem;
        }
     
        li:hover {
          cursor: pointer;
        }
       
        ul li:hover > ul, ul li ul:hover {
          display: block;
        }
        .socialMedia {
          display: flex;
          align-items: center
        }
        .fa-facebook-f {
          color: #2B72A5;
          font-size: 1.5rem;
          margin-left: 2rem;
        }
        .fa-twitter {
          color: #5CBBFF;
          font-size: 1.5rem;
          margin-left: 2rem;
        }
        .fa-instagram {
          color: #d62976;
          font-size: 1.5rem;
          margin-left: 2rem;
        }
        
      `}</style>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
