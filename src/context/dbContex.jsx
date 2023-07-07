import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import {v4 as uuid} from "uuid";
import Swal from "sweetalert2";

export const dbContext = createContext();

export const useDb = () => {
    const context = useContext(dbContext);
    return context;
}

export function DbProvider({children}){
    const [user, setUser] = useState(null);

    const loginFunction = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const saveAnimeFunction = async({name, description, image}) => {
        const newDoc = {
            id: uuid(),
            name: name,
            description: description,
            image: image
        }

        const docRef = doc(db, "Animes", newDoc.id);
        await setDoc(docRef, newDoc).then(async() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Éxito!',
                text: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch(async() => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Éxito!',
                text: 'error',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return unsubscribe;
    }, [])

    return (
        <dbContext.Provider
        value={{loginFunction,
        user, saveAnimeFunction}}
        >
            {children}
        </dbContext.Provider>
    )
}