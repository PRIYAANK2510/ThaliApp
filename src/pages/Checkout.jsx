import { useSelector } from 'react-redux';
import { prices, selectThali } from '../app/thaliSlice';
const Checkout = () => {
	const thali = useSelector(selectThali);
	const total = {};
	Object.keys(thali).forEach((key) => {
		total[key] = thali[key] * prices[key];
	});
	const sum = Object.values(total).reduce(function (previousValue, currentValue) {
		return previousValue + currentValue;
	});
	return (
		<main>
			<h1 className='heading'>Checkout</h1>
			<div className='checkContainer'>
				<div className='headitm itm'>
					<span>Items</span>
					<span>Price</span>
					<span>Total</span>
				</div>
				{Object.keys(thali).map((key, index) => (
					<div
						key={`${index}check`}
						className='itm'
					>
						<span>{key}</span>
						<span>{`${thali[key]} x ${prices[key]}`}</span>
						<span>{`${total[key]} Rs.`}</span>
					</div>
				))}
			</div>
			<div className='total'>
				<p>TOTAL: </p>
				<span>{`${sum} Rs.`}</span>
			</div>
		</main>
	);
};
export default Checkout;
