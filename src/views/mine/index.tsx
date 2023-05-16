import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const mine: React.FunctionComponent<IProps> = () => {
  return <div>Download</div>
}

export default memo(mine)
