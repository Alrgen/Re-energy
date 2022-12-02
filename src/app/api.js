import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createOrder = async(obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
}
// UPDATE
export const updateOrder = async (id, obj) => {
    const colRef = collection(db, 'orders');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('category', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'items');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}