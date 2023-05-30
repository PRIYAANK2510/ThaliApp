import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	addContent,
	decreaseItemCount,
	increaseItemCount,
	prices,
	removeContent,
	selectThali,
} from '../app/thaliSlice';
import { routes } from '../routes/routes';
const Thali = () => {
	const navigate = useNavigate();
	const thali = useSelector(selectThali);
	const thaliItems = ['Chapati', 'Pickle', 'Curd', 'Sweet', 'Daal', 'Paneer'];
	const dispatch = useDispatch();
	const [showError, setShowError] = useState(false);
	const handleCheckout = () => {
		console.log('hello');
		if (Object.keys(thali).length < 2) {
			setShowError(true);
			setTimeout(() => {
				setShowError(false);
			}, 1000);
			return;
		}
		navigate(routes.CHECKOUT);
	};
	return (
		<main>
			{showError && (
				<div className='error'>
					<h3>Select At Least Two Items</h3>
				</div>
			)}
			<div className='container'>
				{Object.keys(thali).map((key, index) => (
					<div
						className='card'
						key={`thali${index}`}
					>
						<img
							src={`/recipes/${key}.jpg`}
							alt={`${key}image`}
						/>
						<p>{key}</p>
						<div>
							<button onClick={() => dispatch(increaseItemCount(key))}>+</button>
							<p>{thali[key]}</p>
							<button onClick={() => dispatch(decreaseItemCount(key))}>-</button>
						</div>
					</div>
				))}
			</div>
			<ul>
				{thaliItems.map((item, index) => (
					<li
						className='items'
						key={index}
					>
						<div>
							<p>{item}</p>
							<span style={{ color: 'green' }}>{`${prices[item]} Rs.`}</span>
						</div>
						{thali[item] ? (
							<button
								className='Removebtn btn'
								onClick={() => dispatch(removeContent(item))}
							>
								Remove
							</button>
						) : (
							<button
								className='Addbtn btn'
								onClick={() => dispatch(addContent(item))}
							>
								Add
							</button>
						)}
					</li>
				))}
			</ul>
			<button
				className='checkout'
				onClick={handleCheckout}
			>
				Checkout
			</button>
		</main>
	);
};
export default Thali;
