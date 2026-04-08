import { useSession } from "next-auth/react"
import Image from "next/image"
import styles from "./profile.module.scss"

const ProfilePage = () => {
  const { data }: any = useSession()

  return (
    <div className={styles.profile}>
      <h1 className={styles.profile__title}>Halaman Profile</h1>

      <div className={styles.profile__card}>
        <div className={styles.profile__card__image}>
          <Image
            src={data?.user?.image || "/default-avatar.png"}
            width={140}
            height={140}
            alt="profile"
            priority
          />
        </div>
        <div className={styles.profile__card__name}>
          {data?.user?.fullname}
        </div>

        <div className={styles.profile__card__email}>
          {data?.user?.email}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage