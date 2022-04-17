import { Redirect, Route } from 'react-router-dom';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
	IonInput,
} from '@ionic/react';
import React, { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import './Tab1.css';
import { auth } from '../../Firebase';

const Tab1: React.FC = () => {
	const [signInEmail, setsignInEmail] = useState('');
	const [signInPassword, setsignInPassword] = useState('');

	const LogIn = async () => {
		try {
			const User = await signInWithEmailAndPassword(
				auth,
				signInEmail,
				signInPassword
			);
			console.log(User);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<IonPage id="SignInScreen">
			<IonContent fullscreen id="SignInPage">
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Log In</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonCard id="SignInCard">
					<IonCardHeader id="SignInCardHeader">
						<IonCardTitle id="SignInCardTitle">Welcome Back</IonCardTitle>
						<IonCardSubtitle id="SignInCardSubtitle">
							Log In To Your Riko Account
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent id="SignInCardInputContainer">
						<IonItem>
							<IonLabel position="fixed">Username:</IonLabel>
							<IonInput
								autocomplete="username"
								onChange={(event) => {
									let Username = event.target as HTMLInputElement;
									setsignInEmail(Username.value);
								}}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="fixed">Password:</IonLabel>
							<IonInput
								type="password"
								autocomplete="current-password"
								onChange={(event) => {
									let Password = event.target as HTMLInputElement;
									setsignInPassword(Password.value);
								}}
							></IonInput>
						</IonItem>
						<div id="SignInButtonContainer">
							<IonButton
								color="danger"
								id="SignInButton"
								routerLink="/Loadscreen"
								onClick={LogIn}
							>
								Sign In
							</IonButton>
						</div>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
