import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Header, Confirm } from 'semantic-ui-react';

import LoginModal from './LoginModal.jsx';
import { viewFilter, logout } from '../actions/UserActions.js';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loginModalOpen: false,
			navBarOpen: false,
			logoutConfirmOpen: false
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

	logout = () => {
		this.setState({ logoutConfirmOpen: true })
	}

	confirm= () => {
		this.setState({ logoutConfirmOpen: false })
		this.props.logout();
	}

	close = () => {
		this.setState({ logoutConfirmOpen: false })
	}

	render() {
		return (
			<Menu id="nav_bar" className='space_between' fixed='top'>

				<Link to='/' className='space_between' style={{marginTop:'10px'}}>
						<h3 id='nav_text' className="white">
							The Pulse of Austin
						<img id='nav_logo' src='./images/whiteOutline.png' alt='Pulse of Austin Logo'/>
							
						</h3>						
				</Link>

				<Menu.Menu position='right'>

					<Menu.Item className='white' link={true} onClick={this.props.loggedIn ? this.logout : this.toggleLoginModal}
					>
						<h4 className='white'>
							{this.props.loggedIn ? 'Log Out' : 'Sign In'}
						</h4>
					</Menu.Item>

					{this.props.loggedIn && this.props.admin ? 
						<Menu.Item className='white' link={true}>
							<Link to='/portal'>
								<h4 className='white'>
									Portal
								</h4>
							</Link>
						</Menu.Item> : null}

					<Menu.Item className='white' link={true}>
						<Link to='/explore'>
							<h4 className='white'>
								Explore
							</h4>
						</Link>
					</Menu.Item>

					<Menu.Item className='white' link={true}>
						<Link to='/portal'>
							<h4 className='white'>
								Local Gov
							</h4>
						</Link>
					</Menu.Item>

					{this.props.loggedIn ? <Menu.Item className='white' link={true}>
						<Link to='/profile'>
							<h4 className='white'>
								Profile
							</h4>
						</Link>
					</Menu.Item> : null}

				</Menu.Menu>

				<Confirm open={this.state.logoutConfirmOpen} onConfirm={this.confirm} onClose={this.close}/> 
				
				{this.state.loginModalOpen && <LoginModal
					loginModalOpen={this.state.loginModalOpen}
					toggleLoginModal={this.toggleLoginModal} />}

			</Menu>
		)
	}
}

const mapStateToProps = (state) => (
	{
		loggedIn: state.UserReducer.loggedIn,
		admin: state.UserReducer.admin
	}
)

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ viewFilter, logout }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);