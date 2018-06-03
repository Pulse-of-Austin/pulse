import React from 'react';
import { Modal, Divider } from 'semantic-ui-react';

const VotesModal = (props) => {
	return (
		<Modal 
			open={props.modalOpen} 
			style={{textAlign: 'center'}} 
			size='small' 
			dimmer='blurring'
			closeIcon={true}
			onClose={props.toggleVotesModal}
		>
			<Modal.Header content='How Your Vote Gets Used'/>
			<Modal.Content  content='We do not sell your data to anyone -- you can rest assured that it will not be used by private companies, or by candidates seeking election. Pulse is a civic tool designed to help private citizens, like you, make decisions about their city and their lives.'/>
		</Modal>
	)
}

export default VotesModal;