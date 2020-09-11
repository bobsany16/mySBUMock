import React from "react"
import styles from "../styles/navBarStyles.module.css"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import { Colors } from "./Colors"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    // this.isOpen = this.props.value;
    // this.menuClicked=this.props.value;
    this.state = {
      open: false,
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <nav className={styles.myNavBar}>
        <span className={styles.navBarToggle}>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            color={Colors.Black}
            width={20}
            height={17}
          ></HamburgerMenu>
        </span>

        <div className={styles.logoWrapper}>
          <Link to="/" className={styles.logo}>
            <h2>LN</h2>
          </Link>
        </div>

        {/* <ul className={styles.mainNav} id="js-menu">
          <li>
            <Link to="/" className={styles.navLinks}>
              Office 365 Mail
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navLinks}>
              Moodle
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navLinks}>
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navLinks}>
              Directory
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navLinks}>
              Tech Assistance
            </Link>
          </li>
        </ul> */}
      </nav>
    )
  }
}

export default NavBar
