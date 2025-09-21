import './main.css';
import { Background } from './../components/background.tsx';

const App = () => {
	return (
		<Background>
			<h1 className="text-4xl font-bold text-teal-400 h-50 w-screen p-8 flex items-center justify-center">
				Backupper
			</h1>
		</Background>
	);
};

export default App;
