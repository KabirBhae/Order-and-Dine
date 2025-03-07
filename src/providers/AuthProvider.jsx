import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic"

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosPublic = useAxiosPublic();
	//for google signin
	const googleProvider = new GoogleAuthProvider();

	const auth = getAuth(app);
	//observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			if (currentUser) {
				const userInfo = { email: currentUser.email };

				// calling api to create a token 
				axiosPublic.post("/jwt", userInfo).then(res => {
					if (res.data.token) {
						localStorage.setItem("access-token", res.data.token);
					}
				});
			} else {
				// TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
				localStorage.removeItem("access-token");
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const updateUser = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};
	const logoutUser = () => {
		setLoading(true);
		return signOut(auth);
	};
	const authInfo = {
		user,
		loading,
		createUser,
		signInUser,
		googleSignIn,
		updateUser,
		logoutUser,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
