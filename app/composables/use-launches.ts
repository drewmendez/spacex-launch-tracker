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
	query getLaunches {
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

export const useLaunches = () => {
	const { data } = useAsyncQuery<{ launches: Launch[] }>(query)

	return {
		launches: computed(() =>
			data.value?.launches.map((launch) => ({
				id: launch.id,
				missionName: launch.mission_name,
				launchDate: formatDate(launch.launch_date_utc),
				launchSite: launch.launch_site ? launch.launch_site.site_name : 'No data',
				rocketName: launch.rocket.rocket_name,
				details: launch.details || 'No data',
				launchYear: launch.launch_year,
				image: launch.links.flickr_images.length
					? launch.links.flickr_images[0]!
					: launch.links.video_link
						? getThumbnail(launch.links.video_link)
						: '',
			})),
		),
	}
}
