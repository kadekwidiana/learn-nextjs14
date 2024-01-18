import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./init";
import bcrypt from 'bcrypt';
import { tree } from "next/dist/build/templates/app-page";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    return data;
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function register(
    data: {
        fullName: string;
        email: string;
        password: string;
        role?: string
    },
) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', data.email),
    );
    const snapshot = await getDocs(q);
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data
    }));

    if (users.length > 0) {
        // console.log('Email telah ada')
        return ({ status: false, statusCode: 400, message: 'Email already exists' })
    } else {
        data.role = 'member';
        data.password = await bcrypt.hash(data.password, 10);
        try {
            await addDoc(collection(firestore, 'users'), data)
            return ({ status: true, statusCode: 200, message: 'Register Successs' })
        } catch (error) {
            return ({ status: false, statusCode: 400, message: 'Register Failed' })
        }
    }

}

// handle login from firebase
export async function login(data: { email: string }) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', data.email)
    );

    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    if (user) {
        return user[0];
    } else {
        return null;
    }
}
