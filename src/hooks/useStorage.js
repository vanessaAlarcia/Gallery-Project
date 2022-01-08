import { useState, useEffect } from 'react';
import { storage, collectionRef} from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, serverTimestamp } from 'firebase/firestore';

//custom hook for storage that will have progress, error, and url available:
//want this to run everytime new file value obtained
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(storage, file.name);

        // put file in reference location:
        const uploadTask = uploadBytesResumable(storageRef, file);
        const createDoc = async (url) => {
                await addDoc(collectionRef, {name: file.name, url: url, createdAt: serverTimestamp()})
            }

        uploadTask.on("state_changed", (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setError(err);
        },
        () => {
            const url = getDownloadURL(storageRef).then((url) => createDoc(url));
            setUrl(url);
        })
    }, [file]);
    // everytime new file is obtained (or everytime file value changes), the function in useEffect will run

    return { progress, error, url }
}

export default useStorage;

//https://firebase.google.com/docs/storage/web/create-reference
//https://firebase.google.com/docs/storage/web/download-files#web-version-9_1
//firebase v9:
//https://www.youtube.com/watch?v=pJ8LykeBDo4
//Firebase v8:
//https://www.youtube.com/watch?v=RLL9FEccW1Y

//`/files/${file.name}`