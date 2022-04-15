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
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
	const [text, setText] = useState('Username');

	return (
		<IonPage>
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
							<IonInput autocomplete="username"></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="fixed">Password:</IonLabel>
							<IonInput
								type="password"
								autocomplete="current-password"
							></IonInput>
						</IonItem>
						<div id="SignInButtonContainer">
							<IonButton color="danger" id="SignInButton">
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
