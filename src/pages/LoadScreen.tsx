import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent, IonPage } from '@ionic/react';

export const LoadScreen: React.FC = () => {
	const [showLoading, setShowLoading] = useState(true);

	setTimeout(() => {
		setShowLoading(false);
	}, 3000);

	return (
		<IonPage>
			<IonContent>
				<IonLoading
					cssClass="my-custom-class"
					isOpen={showLoading}
					onDidDismiss={() => setShowLoading(false)}
					message={'Loading Riko...'}
					duration={5000}
				/>
			</IonContent>
		</IonPage>
	);
};
