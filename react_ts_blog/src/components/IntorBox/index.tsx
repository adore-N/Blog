import React from "react";
import './index.scss'
const IntorBox = (props: React.ReactNode | any) => {
  console.log(props,'description');
  const {title,description } = props.description
  return (
    <div className={props.className}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default IntorBox