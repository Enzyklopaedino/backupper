import './main.css';
import { Button } from '@/components/button';

const App = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold underline text-teal-400">
				Rsbuild with React
			</h1>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>click me!</Button>
			<p>Start building amazing things with Rsbuild.</p>
		</div>
	);
};

export default App;
