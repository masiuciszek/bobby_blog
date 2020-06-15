import * as React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
interface Path {
  name: string
  path: string
}
interface Props {
  onPaths: Array<Path>
}

const AnimatedMenu = styled(animated.ul)``

const SlideNavList: React.FC<Props> = ({ onPaths }) => {
  return (
    <AnimatedMenu>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </AnimatedMenu>
  )
}
export default SlideNavList
