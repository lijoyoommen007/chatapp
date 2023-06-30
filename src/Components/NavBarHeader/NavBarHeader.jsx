import React from 'react'
import navData from "./navbarJsonData.json"

function NavBarHeader() {
  return (
    <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 class="logo me-auto me-lg-0"><a href="/">KASTHA</a></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              {navData.map((item, index) => (
                <li className={item.subMenu ? item.className : ""} key={index}>
                  <a className={item.subMenu ? "" : item.className} href={item.link}>
                    {item.label}
                  </a>
                  {item.subMenu && (
                    <ul>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a className={subItem.className} href={subItem.link}>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">DOWNLOAD BROCHURE</a>

        </div>
      </header>
  )
}

export default NavBarHeader