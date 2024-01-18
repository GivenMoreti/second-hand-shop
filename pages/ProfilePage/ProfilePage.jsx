import { Container } from '@chakra-ui/react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileTabs } from './ProfileTabs'
import { ProfilePosts } from './ProfilePosts'

export const ProfilePage = () => {
  return (
    <Container maxW={"full"}>
      <ProfileHeader />
      <ProfileTabs />
      <ProfilePosts/>


    </Container>
  )
}
