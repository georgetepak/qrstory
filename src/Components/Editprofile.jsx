import React, { useRef, useState } from "react";
import { db, storage } from "../SetUp/firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Editprofile = () => {
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function setUserData(text, imageUrl) {
    const postId = "secondpostishe" + Math.floor(Math.random() * 1000) + 1;
    
    await setDoc(doc(db, "posts", postId), {
      text: text,
      imageUrl: imageUrl || null, // Сохраняем URL изображения или null
      createdAt: new Date(),
    });

    console.log("Пост добавлен:", { text, imageUrl });
  }

  const handleClick = async () => {
    const text = inputRef.current.value.trim();
    const file = fileInputRef.current.files[0];

    if (!text && !file) {
      console.log("Введите текст или загрузите изображение!");
      return;
    }

    setLoading(true);

    let imageUrl = null;

    if (file) {
      try {
        const fileRef = ref(storage, `images/${file.name}-${Date.now()}`);
        await uploadBytes(fileRef, file);
        imageUrl = await getDownloadURL(fileRef);
        console.log("Изображение загружено:", imageUrl);
      } catch (error) {
        console.error("Ошибка загрузки изображения:", error);
      }
    }

    await setUserData(text, imageUrl);

    inputRef.current.value = "";
    fileInputRef.current.value = "";
    setLoading(false);
  };

  return (
    <>
    <div>
      <input ref={inputRef} type="text" placeholder="Введите текст..." />
      <br/>
      <input ref={fileInputRef} type="file" accept="image/*" />
    </div>
    <button onClick={handleClick} disabled={loading}>
        {loading ? "Загрузка..." : "Отправить"}
    </button>
    </>
  );
}

export default Editprofile