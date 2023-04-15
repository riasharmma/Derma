import { app } from "./firebase"
import { getFirestore, setDoc, doc, connectFirestoreEmulator } from "firebase/firestore"
export const db = getFirestore(app);


const addAppointment = async(user, data) =>{
	console.log(data);
	console.log({...data});
	console.log(user.uid);
	await setDoc(doc(db, "users", user, "appointment", "asdsdxasx"), {...data})
}

connectFirestoreEmulator(db, 'localhost', 8090);


export default {addAppointment}