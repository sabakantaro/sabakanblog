import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase, { db } from "../Firebase";

const Post = () => {
  const { register, handleSubmit, errors } = useForm();

  // Create
  const [title, setTitle] = useState("");
  const [pending, setPending] = useState(false);
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();

  const OnSubmit = async () => {
    setTitle("");
    setPending(true);
    try {
      await firebase.firestore().collection("posts").add({
        title,
        createdAt,
      });
    } finally {
      setPending(false);
    }
  };

  // Render
  const [list, loading, error] = useCollectionData(
    db.collection("posts").orderBy("createdAt", "desc"),
    { idField: "gtusLUD1LUmzEuXBh6Xb" }
  );
  console.log(list);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            name="title"
            // ref={register({ required: true })}
          />
        </div>
        {/* <div className="error">
          {errors.msg && "コメントが入力されていません"}
        </div> */}
        <button type="submit">送信</button>
        {pending && "Pendeing..."}
      </form>
    </>
  );
};

export default Post;
