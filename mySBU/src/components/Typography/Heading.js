import React from "react"
import PropTypes from "prop-types"
import styles from "../../styles/typography.module.css"


const propTypes = {
    type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

    color: PropTypes.string,

    web: PropTypes.bool,
    mobile: PropTypes.bool,
  },
  defaultProps = {
    web: false,
    mobile: false,
    type: "h1",
    color: "#ffffff",
  }

// const HeadingComponent = styled(Text)`
//   color: ${({ color }) => color};
//   font-weight: 500;
// `

const Heading = ({ type, color, web, mobile, children, ...rest }) => {
  return (
    <div className={styles.headingText}>
      <h4>{children}</h4>
    </div>
    // <HeadingComponent primitive={type} color={color}>
    //   {children}
    // </HeadingComponent>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
