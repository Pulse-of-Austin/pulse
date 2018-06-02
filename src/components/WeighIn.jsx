import React from 'react';
import { Grid, Accordion } from 'semantic-ui-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Category from './Category.jsx';

class WeighIn extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeIndex: null,
			categories: [
				{
					title: 'Transportation',
					topics: [
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
					]
				},
				{
					title: 'Housing',
					topics: [
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
					]
				},
				{
					title: 'Economics',
					topics: [
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
					]
				},
				{
					title: 'Music',
					topics: [
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
					]
				},
				{
					title: 'Environment',
					topics: [
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
						{
							title: 'test',
							description: 'test'
						},
					]
				}
			],
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e, titleProps) {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? null : index
		this.setState({ activeIndex: newIndex })
	}
	
	render() {
		return (
			<Grid>
				<Grid.Row>
					<NavBar />
				</Grid.Row>
				<Grid.Row style={{ marginLeft: '100px', marginTop: '100px' }}>
					<Accordion style={{marginTop: '200px'}}>
						{this.state.categories.map((category, index) => 
							<Category 
								category={category} 
								key={index}
								index={index}
								activeIndex={this.state.activeIndex}
								handleClick={this.handleClick}
							/>
						)}
					</Accordion>
				</Grid.Row>
				<Grid.Row>
					<Footer />
				</Grid.Row>
			</Grid>
		);
	}
}

export default WeighIn;