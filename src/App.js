import { createContext } from 'react';
import Images from './components/Images';
import Jumbotron from './components/Jumbotron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';

export const ImageContext = createContext();

function App() {
	const { response, isLoading, error, fetchData } = useAxios(
		`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
	);

	const value = {
		response,
		isLoading,
		error,
		fetchData,
	};

	return (
		<ImageContext.Provider value={value}>
			<Jumbotron>
				<SearchField />
			</Jumbotron>
			<Images />
		</ImageContext.Provider>
	);
}

export default App;
