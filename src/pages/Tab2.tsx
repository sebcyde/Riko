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
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
							<IonInput autocomplete="username"></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="fixed">Password:</IonLabel>
							<IonInput
								type="password"
								autocomplete="current-password"
							></IonInput>
						</IonItem>
						<div id="SignUpButtonContainer">
							<IonButton color="danger" id="SignUpButton">
								Sign In
							</IonButton>
						</div>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
