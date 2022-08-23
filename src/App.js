import Images from './components/Images';
import Jumbotron from './components/Jumbotron';
import SearchField from './components/SearchField';

function App() {
	return (
		<>
			<Jumbotron>
				<SearchField />
			</Jumbotron>
			<Images />
		</>
	);
}

export default App;
