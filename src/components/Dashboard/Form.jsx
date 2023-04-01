import { useRef } from "react";
import { auth, storage, db } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";

const Form = () => {

    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();

        const title = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const github = form.current[3]?.value;
        const cover = form.current[4]?.files[0];

        const storageRef = ref(storage, `portfolio/${cover.name}`);

        uploadBytes(storageRef, cover)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((downloadUrl) => {
                        savePortfolio({
                            title,
                            description,
                            url,
                            github,
                            cover: downloadUrl
                        })
                    }, (error) => {
                        console.log(error);
                        savePortfolio({
                            title,
                            description,
                            url,
                            github,
                            cover: null
                        })
                    })
            }, () => {
                savePortfolio({
                    title,
                    description,
                    url,
                    github,
                    cover: null
                })
            })
        
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('failed to add portfolio');
        }
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="URL" /></p>
                <p><input type="text" placeholder="Github repo url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
        </div>
    )
}

export default Form;