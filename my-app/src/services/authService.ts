import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore"
import { db } from "@/utils/db/firebase"
import bcrypt from "bcrypt"

// LOGIN CREDENTIALS
export const login = async (email: string, password: string) => {
  const q = query(collection(db, "users"), where("email", "==", email))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const user: any = {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return null

  return user
}

// REGISTER
export const register = async (userData: any) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  )

  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    return { status: false, message: "User already exists" }
  }

  userData.password = await bcrypt.hash(userData.password, 10)
  userData.role = "member"

  await addDoc(collection(db, "users"), userData)

  return { status: true }
}

// OAUTH (Google & GitHub)
export const loginWithOAuth = async (userData: any) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  )

  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    const existingUser: any = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data(),
    }

    userData.role = existingUser.role

    await updateDoc(doc(db, "users", existingUser.id), userData)

    return { status: true, data: userData }
  } else {
    userData.role = "member"
    await addDoc(collection(db, "users"), userData)

    return { status: true, data: userData }
  }
}