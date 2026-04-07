import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore"
import app from "./firebase"
import bcrypt from "bcrypt"

const db = getFirestore(app)

// Produk =====
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName))
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return data
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id))
  const data = snapshot.data()
  return data
}
// =========

// Auth =====
export async function signIn(email: string,) {
  const q = query(collection(db, "users"), where("email", "==", email))
  const querySnapshot = await getDocs(q)
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null
  return {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  }
}

export async function signUp(userData: {
  email: string
  fullname: string
  password: string
  role?: string
}) {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    )

    const snapshot = await getDocs(q)

    if (!snapshot.empty) {
      return {
        status: false,
        message: "User already exists",
      }
    }

    userData.password = await bcrypt.hash(userData.password, 10)
    userData.role = "member"

    await addDoc(collection(db, "users"), userData)

    return {
    status: true,
    message: "User registered successfully",
  }
}
// =========

// OAUTH (Google & GitHub) ======
export async function signInWithOAuth(userData: any) {
  try {
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

      return {
        status: true,
        data: userData,
      }
    } else {
      userData.role = "member"

      await addDoc(collection(db, "users"), userData)

      return {
        status: true,
        data: userData,
      }
    }
  } catch (error: any) {
    return {
      status: false,
      message: "Failed to login with OAuth",
    }
  }
}