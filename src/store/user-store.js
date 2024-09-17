// How to easily handle updating the state of specific properties deeply nested objects using Zustand
// use immer

import { produce } from "immer"
import { create } from "zustand"

const initialState = {
	user1: {
		id: 1,
		friends: ["Conrad", "Edwardo", "Denis"],
		profile: {
			name: "John Doe",
			age: 30,
			address: {
				street: "123 Main St",
				city: "New York",
				state: "NY",
			},
		},
	},
}

export const useUserStore = create((set) => ({
	user: initialState.user1,
	// Alternative 1: This is what we are trying to avoid.
	updateAddressStreet: (street) =>
		set((state) => ({
			user: {
				...state.user,
				profile: {
					...state.user.profile,
					address: {
						...state.user.profile.address,
						street: street,
					},
				},
			},
		})),

	// Alternative 2: This is a more efficient way to update deeply nested objects using immer.
	// i. Install immer using npm i immer
	// ii. import 'produce' from immer
	// iii. user produce
	updateAddressCity: (city) =>
		set(
			produce((state) => {
				state.user.profile.address.city = city
			})
		),
}))
