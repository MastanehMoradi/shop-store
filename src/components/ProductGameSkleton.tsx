import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

export const ProductGameSkleton = () => {
  return (
    <Card>
        <Skeleton height='200px'></Skeleton>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}
