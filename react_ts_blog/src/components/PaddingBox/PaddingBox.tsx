import React from "react"
import './PaddingBox.scss'
const Padding = (props: React.ReactNode | any) => {
  console.log('Padding',props);
  
  const ChildrenSlot = props.children
  const className: string[] = [props.className, 'padding-box']
    return (
        <div className={className.join(' ')} style={props.style}>
           {ChildrenSlot}
        </div>
    )
}

export default Padding
