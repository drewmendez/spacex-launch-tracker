export const useSortByYear = () => {
	const sortOrder = ref('Ascending')

	const sorts = ['Ascending', 'Descending']

	return { sortOrder, sorts }
}
