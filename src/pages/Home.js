import Header from './../components/header/Header'
import './Home.css';

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">О нас</h2>
							<p className="text1">
								Донецкие аэрозоли - ...
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Почему именно мы?</h2>
							<p className="text1">Потому что . . .</p>
						</li>
					</ul>
					

				</div>
				<div class="button-container"> 
					<a href="/projects" className="btn-outline">
					<img  alt="" />
						Продукция
					</a>

					</div>
			</main>
		</>
	);
}

export default Home;