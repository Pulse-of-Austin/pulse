export const selectTopic = (topic) => (
	{
		type: 'SELECT-TOPIC',
		payload: topic
	}
)

export const selectNewTopicStubs = () => (
	{
		type: 'SELECT-NEW-TOPIC-STUBS'
	}
)

export const selectPreviousTopicStubs = () => (
	{
		type: 'SELECT-PREVIOUS-TOPIC-STUBS'
	}
)