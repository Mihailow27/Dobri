/* import { firestore, auth } from "./firebase";

// Example function to fetch menu items from Firestore
export const fetchMenuItems = async () => {
  const menuCollection = firestore.collection("menu");
  const snapshot = await menuCollection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Example function to sign in with email and password
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
 */
