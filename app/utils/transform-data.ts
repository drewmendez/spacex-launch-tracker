export const transformData = (launches: Launch[] | undefined) => {
	return launches?.map((launch) => ({
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
	}))
}
