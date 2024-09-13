import { CustomTransition } from 'common'

const PageTransitionEffect = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <CustomTransition>
      <main>{children}</main>
    </CustomTransition>
  )
}

export default PageTransitionEffect
