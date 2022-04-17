import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonLoading,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
	useIonLoading,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/UserLoginTabs/Tab1';
import Tab2 from './pages/UserLoginTabs/Tab2';
import { LoadScreen } from './pages/LoadScreen';
import { Dashboard } from './pages/Dashboard';
import { useState, useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Styles */
import './theme/App.css';

setupIonicReact();

const App: React.FC = () => {
	const [Loading, setLoading] = useState(false);

	// setTimeout(() => {
	// 	setLoading(true);
	// }, 3000);

	return (
		<>
			<IonApp>
				{Loading ? (
					<LoadScreen />
				) : (
					<IonReactRouter>
						<IonTabs>
							<IonRouterOutlet>
								<Route exact path="/">
									<Tab1 />
								</Route>
								<Route exact path="/SignUp">
									<Tab2 />
								</Route>
								<Route exact path="/SignIn">
									<Tab1 />
								</Route>
								<Route path="/Loadscreen" component={LoadScreen} />
								<Route path="/Dashboard" component={Dashboard} />
								{/* <Route
						path="/Dashboard"
						render={(props) => {
							auth ? <Dashboard {...props} /> : <Tab1 />;
						}}
					/> */}
							</IonRouterOutlet>
							<IonTabBar slot="bottom">
								<IonTabButton tab="SignIn" href="/SignIn">
									<IonLabel id="SignInTabLabel">Sign In</IonLabel>
								</IonTabButton>
								<IonTabButton tab="SignUp" href="/SignUp">
									<IonLabel id="SignUpTabLabel">Sign Up</IonLabel>
								</IonTabButton>
							</IonTabBar>
						</IonTabs>
					</IonReactRouter>
				)}
			</IonApp>
			;
		</>
	);
};

export default App;
