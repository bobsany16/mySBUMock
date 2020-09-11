import React from "react"
import PropTypes from "prop-types"
import styles from "../../styles/footer.module.css"

import { Body } from "../Typography"

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.copyright}>
        <Body>Copyright@2020</Body>
      </div>
      <div className={styles.creator}>
        <Body>Created by LN</Body>
      </div>
    </div>
  )
}

export default Footer
