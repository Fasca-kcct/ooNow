import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import {
  SingleBoxFrame,
  Footer,
  userProfileState,
} from "@kcctdensan/oonow-libs/next"
import LoginForm from "components/organisms/LoginForm"

const Login: FC = () => {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState)

  const router = useRouter()
  const { user, to } = router.query

  const onSuccess = user => {
    setUserProfile(user)
    if (to) {
      router.replace(to)
    } else {
      router.replace("/profile")
    }
  }

  return (
    <>
      <SingleBoxFrame>
        <LoginForm userInit={user} onSuccess={onSuccess} />
      </SingleBoxFrame>
      <Footer />
    </>
  )
}

export default Login
