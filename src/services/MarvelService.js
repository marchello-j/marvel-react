class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=cba949ffd82da5ecd5ad14d1b764d3db';

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCaracters = () => {
		return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
	};
	getCaracters = (id) => {
		return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
	};
}

export default MarvelService;
