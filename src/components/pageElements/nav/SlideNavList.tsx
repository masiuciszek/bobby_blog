import * as React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { handleFlex } from '../../styled/helpers'
import { Link } from 'gatsby'
import { above, below } from '../../styled/media'
interface Path {
  name: string
  path: string
}
interface Props {
  onPaths: Array<Path>
  on: boolean
}

const AnimatedMenu = styled(animated.ul)`
  min-height: 120vh;
  /* min-height: 120vh; */
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryShadow};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  ${handleFlex('column', 'center', 'center')};

  li {
    width: 70vw;
    padding: 1rem;
    text-align: center;
    margin: 1rem;
    &:last-child {
      margin-bottom: 50rem;
    }
  }
  a {
    display: block;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.size.h2};
    text-shadow: 2px 2px 3px ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) => theme.transition.mainTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.offWhite};
    }
  }
  ${above.medium`
    display: none;
  `}
  ${below.medium`
    min-height: 160vh;
  `}
`

const SlideNavList: React.FC<Props> = ({ onPaths, on }) => {
  const { x } = useSpring({
    x: on ? 0 : 100,
  })
  return (
    <AnimatedMenu
      style={{
        transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`),
      }}
    >
      {onPaths.map(({ path, name }) => (
        <li key={path}>
          {' '}
          <Link to={path}>{name}</Link>{' '}
        </li>
      ))}
    </AnimatedMenu>
  )
}
export default SlideNavList
