import { app } from "./firebase"
import { getFirestore, collection, addDoc, connectFirestoreEmulator } from "firebase/firestore"
export const db = getFirestore(app);



connectFirestoreEmulator(db, 'localhost', 8090);