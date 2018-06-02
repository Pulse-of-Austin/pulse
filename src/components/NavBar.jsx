import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Header } from 'semantic-ui-react';

import LoginModal from './LoginModal.jsx';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loginModalOpen: false,
			navBarOpen: false
		}
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	toggleLoginModal() {
		this.setState({
			loginModalOpen: !this.state.loginModalOpen
		})
	}

	toggleNavbar() {
		this.setState({
			navBarOpen: !this.state.navBarOpen
		})
	}

	render() {
		return (
			<Menu id="nav_bar" className='space_between' fixed='top'  style={{ minHeight: '40px' }}>

				<Link to='/'>
					<Menu.Item link={true}>
						<h3 className="white">
							The Pulse of Austin
						</h3>
					</Menu.Item>
				</Link>

				<Menu.Menu position='right'>

					<Menu.Item className='white' link={true} onClick={this.toggleLoginModal}
					>
						<h3 className='white'>
							Sign In
						</h3>
					</Menu.Item>

					<Menu.Item className='white' link={true}>
						<Link to='/portal'>
							<h3 className='white'>
								Portal
							</h3>
						</Link>
					</Menu.Item>

					<Menu.Item className='white' link={true}>
						<Link to='/portal'>
							<h3 className='white'>
								Explore
							</h3>
						</Link>
					</Menu.Item>

					<Menu.Item className='white' link={true}>
						<Link to='/portal'>
							<h3 className='white'>
								Local Gov
							</h3>
						</Link>
					</Menu.Item>

					<Menu.Item className='white' link={true}>
						<Link to='/portal'>
							<h3 className='white'>
								Profile
							</h3>
						</Link>
					</Menu.Item>

				</Menu.Menu>
				
				{this.state.loginModalOpen && <LoginModal
					loginModalOpen={this.state.loginModalOpen}
					toggleLoginModal={this.toggleLoginModal} />}

			</Menu>
		)
	}
}

const mapStateToProps = (state) => (
	{
		loggedIn: state.loggedIn
	}
)

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);