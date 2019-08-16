const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacters: () => {
				//fetch characters and put them in store
			},
			getPlanets: () => {
				//fetch the planets and put them in store
			},
			markAsFavorite: name => {
				const store = getStore();
				//add the character or planet to the fav list
				console.log(name);
				setStore({ favorites: store.favorites.concat(name) });
			},
			removeFavorites: () => {
				//remove the character or planet from fav list
			}
		}
	};
};

export default getState;
