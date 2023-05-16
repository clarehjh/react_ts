import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const focus: React.FunctionComponent<IProps> = () => {
  return <div>Download</div>
}

export default memo(focus)
