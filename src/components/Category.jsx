import React from 'react';
import { Accordion } from 'semantic-ui-react';

import Topic from './Topic.jsx';

class Category extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTopic: null
		}
	}

	selectTopic

	render() {
		console.log(this.props.index, this.props.activeIndex)
		return (
			<div>
				<Accordion.Title index={this.props.index} active={this.props.activeIndex === this.props.index} onClick={this.props.handleClick}>
					{this.props.category.title}
				</Accordion.Title>
				<Accordion.Content active={this.props.activeIndex === this.props.index}>
					{this.props.category.topics.map((topic, index) => <p key={index}>topic.title</p>)}
				</Accordion.Content>
			</div>
		)
	}
}

export default Category;