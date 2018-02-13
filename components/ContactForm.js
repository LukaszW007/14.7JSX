var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <form action = "" className = "contactForm">
                <input type = "text" placeholder='Name' value={this.props.contact.firstName}/>
                <input type = "text" placeholder='Last Name' value={this.props.contact.lastName}/>
                <input type = "text" placeholder='E-mail' value={this.props.contact.email}/>
                <button type='submit'>Add contact</button>
            </form>
/*            React.createElement('form', {className: 'contactForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name',
                    value: this.props.contact.firstName,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Last Name',
                    value: this.props.contact.lastName,
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'E-mail',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {
                    type: 'submit'
                }, 'Add contact')
            )*/
        )
    }
});