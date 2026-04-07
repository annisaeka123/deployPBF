import { getDocs, collection, getDoc, doc } from "firebase/firestore"
import { db } from "@/utils/db/firebase"

export const getAllProducts = async (collectionName: string) => {
  const snapshot = await getDocs(collection(db, collectionName))
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export const getProductById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(db, collectionName, id))
  return snapshot.data()
}