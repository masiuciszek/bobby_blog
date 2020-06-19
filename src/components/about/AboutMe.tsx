import * as React from 'react'
import styled from 'styled-components'
import { handleFlex } from '../styled/helpers'
import { below } from '../styled/media'
import { IFluidObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'
import useToggle from '../../hooks/useToggle'

interface Props {
  profileImg: {
    fluid: IFluidObject | IFluidObject[]
  }
}

const AboutMe: React.FC<Props> = ({ profileImg }) => {
  const [on, toggle] = useToggle(false)
  React.useEffect(() => {
    setTimeout(() => {
      toggle()
    }, 500)
  }, [])

  const { opacity, x } = useSpring({
    opacity: on ? 1 : 0,
    x: on ? 0 : 100,
  })
  return (
    <Grid>
      <ProfileImg
        style={{
          opacity,
          transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`),
        }}
      >
        <Img fluid={profileImg.fluid} />
      </ProfileImg>
      <ProfileContent
        style={{
          opacity,
          transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`),
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at dicta
          hic ullam fugiat quidem maxime suscipit, provident quibusdam, tempora,
          iure distinctio repellendus harum maiores voluptatibus vero sit
          laboriosam recusandae. Doloribus sit quos ab alias, ullam mollitia
          magnam et ea. Facere quasi excepturi nulla dolor libero corrupti
          magnam, aliquid maxime debitis commodi nesciunt laboriosam, laudantium
          harum veritatis fuga a qui. Iste dolorem totam possimus minus dolore
          dicta necessitatibus amet ex nihil quae inventore ad, adipisci iure
          voluptas voluptates impedit eius ducimus pariatur consequatur
          reprehenderit nam tenetur quam. Nostrum provident praesentium deserunt
          eveniet voluptas consequuntur neque deleniti alias laborum voluptatum
          consequatur optio quam fuga, delectus sunt harum beatae cupiditate sit
          similique quaerat ea porro maiores. Quidem officia dolorem aliquam
          dolorum et.
        </p>
      </ProfileContent>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 15px;
  padding: 1rem 2rem;
  min-height: 60vh;

  ${below.medium`
    ${handleFlex('column', 'center', 'center')};
  `}
`

const ProfileImg = styled(animated.div)`
  padding: 2rem;
  ${below.medium`
    width: 30rem;
    margin: 2rem 0 4rem 0;
  `}
`
const ProfileContent = styled(animated.div)`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`

export default AboutMe
