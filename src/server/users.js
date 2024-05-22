async function addUser(userId, name, email) {
  await setDoc(doc(db, "Users", userId), {
    name: name,
    email: email,
    lastModified: serverTimestamp(),
  });
}
