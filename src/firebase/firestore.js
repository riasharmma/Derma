import { app } from "./firebase"
import { getFirestore, collection, addDoc, connectFirestoreEmulator, doc, getDocs } from "firebase/firestore"
export const db = getFirestore(app);

const addAppointment = async(user, data) =>{
	try {
		const docRef = await addDoc(collection(db, "users", user, "appointment"), {...data})
		console.log(docRef);		
	} catch (error) {
		console.log(error)
	}
}

const getAppointmentCollectionQuery = async(user) => {
	console.log(user)
	console.log(db)
	const geds = await query(collection(db, "users", user, "appointment"))
	console.log(geds);
}

const debug = async()=>{
	const querySnapshot = await getDocs(collection(db, "users"));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
	});
}

// connectFirestoreEmulator(db, 'localhost', 8090);


export default {addAppointment, getAppointmentCollectionQuery, collection, debug}