type LaunchYear = {
	launch_year: string
}

const query = gql`
	query Launches {
		launches {
			launch_year
		}
	}
`

export const useFilterYear = () => {
	const { data } = useAsyncQuery<{ launches: LaunchYear[] }>(query)

	const selectedYear = ref(null)

	const uniqueYears = computed(() => {
		const years = data.value?.launches.map((launch) => launch.launch_year)
		return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a))
	})

	return { selectedYear, uniqueYears }
}
