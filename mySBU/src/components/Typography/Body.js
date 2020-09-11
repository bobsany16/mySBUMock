import React from "react"
import PropTypes from "prop-types"
import styles from "../../styles/typography.module.css"

const propTypes = {
    bold: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
  },
  defaultProps = {
    bold: false,
    small: false,
    medium: false,
    large: false,
  }

const Body = ({ props, children, bold, small, medium, large }) => {
  if (!small && !medium && !large) {
    small = true
  }
  if (bold) {
    return <p className={styles.bodyTextBold}>{children}</p>
  } else if (small) {
    return <p className={styles.bodyTextSmall}>{children}</p>
  } else {
    return <p className={styles.bodyTextDefault}>{children}</p>
  }
}

Body.propTypes = propTypes
Body.defaultProps = defaultProps

export default Body
