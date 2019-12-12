import React from 'react';

const SectionDescription = props => {
  const {children, style} = props;
  return <p style={style} className="global-text">{children}</p>
}
export default SectionDescription;
