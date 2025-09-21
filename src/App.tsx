import './main.css';
import { Background } from './../components/background.tsx';
import { Upload } from './../components/upload.tsx';
import { Header } from './../components/header.tsx';

const App = () => {
	return (
		<Background>
			<Header title="Backupper" />
			<Upload />
		</Background>
	);
};

export default App;
