import FaShield from 'react-icons/lib/fa/shield'
import { Component } from 'react'

class Member extends Component {

	render() {
		const { name, admin, email, thumbnail, makeAdmin } = this.props
	    return (
	        <div className="member">
	        	<h1>{name} { admin ? <FaShield /> : null }</h1>
	        	<img src={thumbnail} alt='Profile Picture' />
	        	<a href={`mailto:${email}`}>{email}</a>
	        	<a onClick={makeAdmin}>Make Admin</a>
	        </div>
	    )
	}
}

export default Member
