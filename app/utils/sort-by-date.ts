export const sortByDate = (launches: Launch[], sortOrder: string) => {
	const copiedArray = [...launches]
	return copiedArray.sort((a, b) => {
		if (sortOrder === 'Ascending') {
			return new Date(a.launch_date_utc).getTime() - new Date(b.launch_date_utc).getTime()
		} else {
			return new Date(b.launch_date_utc).getTime() - new Date(a.launch_date_utc).getTime()
		}
	})
}
