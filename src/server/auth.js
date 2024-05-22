import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered successfully:", user.uid);
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
}
