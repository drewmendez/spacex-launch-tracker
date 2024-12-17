export const getThumbnail = (url: string) => {
	const regex =
		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

	const match = url.match(regex)

	if (match && match[1]) {
		const videoId = match[1]
		return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
	} else {
		return url
	}
}
