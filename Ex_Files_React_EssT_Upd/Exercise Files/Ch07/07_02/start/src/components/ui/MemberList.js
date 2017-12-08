import { Component } from 'react'
import Member from './Member'
import fetch from 'isomorphic-fetch'

class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [
            {
                name: "Joe Wilson",
                email: "joe.wilson@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
            },
            {
                name: "Stacy Gardner",
                email: "stacy.gardner@example.com",
                thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
            },
            {
                name: "Billy Young",
                email: "billy.young@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
            }
          ]
        }
    }

    render() {
        members = this.state.members.map((member, i) => {
                    <Member key={i}
                        onClick={email => this.console.log(email)}
                        {...member} />
                });
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
                { members }
            </div>
        )
   }
}

export default MemberList
