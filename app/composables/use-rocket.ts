export type Distance = {
	feet: number
	meters: number
}

export type Mass = {
	kg: number
	lb: number
}

export type Rocket = {
	id: string
	name: string
	description: string
	first_flight: string
	height: Distance
	diameter: Distance
	mass: Mass
	stages: number
}

const query = gql`
	query Rocket($rocketId: ID!) {
		rocket(id: $rocketId) {
			id
			name
			description
			first_flight
			height {
				feet
				meters
			}
			diameter {
				feet
				meters
			}
			mass {
				kg
				lb
			}
			stages
		}
	}
`

export const useRocket = () => {
	const route = useRoute()

	const { data } = useAsyncQuery<{ rocket: Rocket }>(query, { rocketId: route.params.rocketId })

	const rocket = computed(() => data.value?.rocket)

	return { rocket }
}
