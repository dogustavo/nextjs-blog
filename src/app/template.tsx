import { CustomTransition } from 'common'

const PageTransitionEffect = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <CustomTransition>{children}</CustomTransition>
}

export default PageTransitionEffect
