interface State {
	favorites: Rocket[]
}

export const useFavoriteRocketsStore = defineStore('favorite-rockets', {
	state: (): State => ({ favorites: [] }),
	getters: {
		getFavorites: (state) => state.favorites,
	},
	actions: {
		addToFavorites(rocket: Rocket) {
			this.favorites.push(rocket)
		},
		removeToFavorites(id: string) {
			const rocketIndex = this.favorites.findIndex((rocket) => rocket.id === id)
			this.favorites.splice(rocketIndex, 1)
		},
		clearFavorites() {
			this.favorites = []
		},
		isAlreadyInFavorites(id: string) {
			return this.favorites.some((rocket) => rocket.id === id)
		},
	},
})
