import './main.css';
import { Header } from './../components/header.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/src/pages/home.tsx';

const App = () => {
	return (
		<BrowserRouter>
			<Header title="Backupper" />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>

	);
};

export default App;
