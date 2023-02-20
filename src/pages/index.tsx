import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='text-center'>
			<div>BASIC CRUD</div>
			<div>
				<form action='api/submit' method='POST'>
					<label htmlFor='name'>insert name</label>
					<input type='text' name='name' />
					<label htmlFor='age'>Age</label>
					<input type='text' name='age' />
					<button className='bg-red-700 rounded p-3' type='submit'>
						submit
					</button>
				</form>
			</div>
		</div>
	);
}
