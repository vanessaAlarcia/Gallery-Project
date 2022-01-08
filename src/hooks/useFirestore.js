import { useState, useEffect } from 'react';
import { q } from "../firebase/config";
import { onSnapshot } from "firebase/firestore";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(q, (snapshot) => {
            let documents = [];
            snapshot.docs.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        return () => unsub();
    }, [collection]);

    return { docs };
}

export default useFirestore;

//https://firebase.google.com/docs/firestore/query-data/listen#web-version-9_1
//https://firebase.google.com/docs/firestore/query-data/order-limit-data
//https://firebase.google.com/docs/firestore/query-data/listen
//https://firebase.google.com/docs/firestore/query-data/get-data
//https://www.youtube.com/watch?v=gEaY2GZMino
//https://cloud.google.com/firestore/docs/manage-data/add-data#web-version-9_9