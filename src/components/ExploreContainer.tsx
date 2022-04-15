import './ExploreContainer.css';

interface ContainerProps {
	name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="container">
			<h1>Test - Riko V1</h1>
		</div>
	);
};

export default ExploreContainer;
