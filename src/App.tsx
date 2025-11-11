import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/src/pages/home.tsx';
import { Header } from '@/components/ui/header';
import { NotFound } from '@/src/pages/not-found';

const App = () => {
	return (
		<BrowserRouter>
			<Header title="Backupper" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
