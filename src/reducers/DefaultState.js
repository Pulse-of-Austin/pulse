export const DefaultState = {
	loggedIn: false,
	admin: true,
	user: null,
	viewFilter: false,
	username: null,
	topicStubs: [
		{
			id: 0,
			title: 'Smart Mobility Plan',
			subtitle: 'How will our transportation look with autonomous vehicles?',
			category: 'Transportation',
			imageURL: 'http://movabilityaustin.org/wp-content/uploads/2018/01/Austin-Capital-MetroRail.jpg'
		},
		{
			id: 1,
			title: 'Strategic Mobility Plan',
			subtitle: 'Austin\'s priorities and what they mean for the future of transportation.',
			category: 'Transportation',
			imageURL: 'http://movabilityaustin.org/wp-content/uploads/2018/01/Austin-Capital-MetroRail.jpg'
		},
		{
			id: 2,
			title: 'Development',
			subtitle: '$300 million dollars have been put aside for a new housing project.',
			category: 'Development',
			imageURL: 'http://movabilityaustin.org/wp-content/uploads/2018/01/Austin-Capital-MetroRail.jpg'
		},
	],
	selectedTopicStubs: [
		{
			id: 0,
			title: 'Smart Mobility Plan',
			subtitle: 'How will our transportation look with autonomous vehicles?',
			category: 'Transportation',
			imageURL: 'http://www.autoguide.com/blog/wp-content/uploads/2015/12/google-self-driving-car-project.jpg'
		},
		{
			id: 1,
			title: 'Strategic Mobility Plan',
			subtitle: 'Austin\'s priorities and what they mean for the future of transportation',
			category: 'Transportation',
			imageURL: 'http://movabilityaustin.org/wp-content/uploads/2018/01/Austin-Capital-MetroRail.jpg'
		},
		{
			id: 2,
			title: 'Development',
			subtitle: '$300 million dollars have been put aside for a new housing project.',
			category: 'Development',
			imageURL: 'https://files.probuilder.com/s3fs-public/styles/con/public/brandon-griggs-82205.jpg?itok=ZOWE2Low'
		},
	],
	currentLastStubIndex: 2,
	selectedTopic: {
		title: 'Dockless Mobility Pilot',
		subtitle: 'How will dockless transportation options impact Austin\'s transportation ecosystem? \n What could these seervices mean for data privacy?',
		date: '04.10.18 -- NOW',
		overview: 'In early April, the city kicked off a pilot program for dockless bike and electric scooter services. The first piece to know is that the city plans to privatize these dockless operations, rather than making them part of the city\'s public B-cycle service. The Pulse explores what the city should consider in signing contracts to these companies.',
		details: [
			{
				title: 'Data Accessibility',
				description: 'Data from dockless bikes could help the city prioritize bike infrastructure, but a lot of dockless bike companies will not make this data open.'
			},
			{
				title: 'Data Reporting',
				description: '1 in 10 companies Austin is considering even reported false data in Aurora, CO, claiming 2.5 daily rides per bike why they were really clocking 0.18 daily rides.'
			},
			{
				title: 'User Location Tracking',
				description: 'Some dockless bike companies track users even when they are not using the bikes, reserving the right to sell that data to third parties.'
			}
		],
		milestones: {

		},
		perspectives: [
			{
				who: 'Central Austin Resident',
				when: '18 April 2018',
				what: 'Data should be 100% open -- the value of how (and if) people are using different transportation options may be worth more than the service itself.'
			},
			{
				who: 'East Austin Resident',
				when: '20 April 2018',
				what: 'With dockless bikes, not only can we collected the dataa bout where the trip started and ended, but we can also collect data on the exact route the rider took. This granularity of data is unprecedented and would be instrumental in strategically planning biking infrastructures.'
			}
		],
		polls: [
			{
				options: [
					{
						letter: 'A',
						details: 'Yes',
						votes: 20
					},
					{
						letter: 'B',
						details: 'No',
						votes: 70
					},
					{
						letter: 'C',
						details: 'Other thoughts',
						votes: 12
					},
				],
				question: 'Should the city require access to the data collected by dockless transportation companies?'
			},
			{
				options: [
					{
						letter: 'A',
						details: 'Whatever the companies choose',
						votes: 65
					},
					{
						letter: 'B',
						details: 'Ridership data only',
						votes: 15
					},
					{
						letter: 'C',
						details: 'Other thoughts',
						votes: 10
					},
				],
				question: 'What type of data should the companies be allowed to collect?'
			},
			{
				options: [
					{
						letter: 'A',
						details: 'Data',
						votes: 0
					},
					{
						letter: 'B',
						details: 'Congestion',
						votes: 0
					},
					{
						letter: 'C',
						details: 'Access / Equity',
						votes: 3
					},
					{
						letter: 'D',
						details: 'Safety',
						votes: 2
					},
					{
						letter: 'E',
						details: 'Something else',
						votes: 0
					},

				],
				question: 'Further thoughts on:'
			}
		]
	}
};