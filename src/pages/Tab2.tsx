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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {
	const [registerEmail, setregisterEmail] = useState('');
	const [registerPassword, setregisterPassword] = useState('');

	const Register = async () => {
		try {
			const User = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(User);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<IonPage id="SignUpScreen">
			<IonContent fullscreen id="SignUpPage">
				<IonCard id="SignUpCard">
					<IonCardHeader id="SignUpCardHeader">
						<IonCardTitle id="SignUpCardTitle">Welcome To Riko</IonCardTitle>
						<IonCardSubtitle id="SignUpCardSubtitle">
							Create A New Account
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent id="SignUpCardInputContainer">
						<IonItem>
							<IonLabel position="fixed">Username:</IonLabel>
							<IonInput
								id="NewUsername"
								onChange={(event) => {
									let NewUsername = event.target as HTMLInputElement;
									setregisterEmail(NewUsername.value);
									console.log(registerEmail);
								}}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="fixed">Password:</IonLabel>
							<IonInput
								type="password"
								id="NewPassword"
								onChange={(event) => {
									let NewPassword = event.target as HTMLInputElement;
									setregisterPassword(NewPassword.value);
									console.log(registerPassword);
								}}
							></IonInput>
						</IonItem>
						<div id="SignUpButtonContainer">
							<IonButton
								color="danger"
								id="SignUpButton"
								routerLink="/Loadscreen"
								onClick={Register}
							>
								Sign Up
							</IonButton>
						</div>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
