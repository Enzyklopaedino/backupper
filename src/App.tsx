import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/src/pages/home.tsx';
import { NotFound } from '@/src/pages/not-found';
import { Layout } from '@/src/layout';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
