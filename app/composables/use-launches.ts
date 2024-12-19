type LaunchSite = {
	site_name: string
	site_name_long: string
}

type Rocket = {
	rocket_name: string
	rocket: {
		id: string
	}
}

type Links = {
	flickr_images: string[]
	video_link: string | null
}

export type Launch = {
	id: string
	mission_name: string
	launch_date_utc: string
	launch_site: LaunchSite | null
	rocket: Rocket
	details: string | null
	links: Links
	launch_year: string
}

const query = gql`
	query Launches {
		launches {
			id
			mission_name
			launch_date_utc
			launch_site {
				site_name
				site_name_long
			}
			rocket {
				rocket_name
				rocket {
					id
				}
			}
			details
			links {
				flickr_images
				video_link
			}
			launch_year
		}
	}
`

export const useLaunches = (filter: Ref<string | null, string | null>, sortOrder: Ref<string, string>) => {
	const { data } = useAsyncQuery<{ launches: Launch[] }>(query)

	const launches = computed(() => {
		if (!filter.value) {
			return transformData(sortByDate(data.value?.launches, sortOrder.value))
		} else {
			return transformData(
				sortByDate(
					data.value?.launches.filter((launch) => launch.launch_year === filter.value),
					sortOrder.value,
				),
			)
		}
	})

	return { launches }
}
