import { Route, Routes } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Thali from '../pages/Thali';
import { routes } from './routes';

const PageRoutes = () => {
	return (
		<Routes>
			<Route path={routes.HOME}>
				<Route
					index
					element={<Thali />}
				/>
				<Route
					path={routes.CHECKOUT}
					element={<Checkout />}
				/>
				<Route
					path={routes.ERROR}
					element={<h1>PAGE NOT EXIST</h1>}
				/>
			</Route>
		</Routes>
	);
};
export default PageRoutes;
