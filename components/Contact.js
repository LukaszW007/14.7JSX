var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            <div className = "contactItem">
                <img className = "contactImage" src= 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'/>
                <div className = "contactInfo">
                    <p className = "contactLabel" placeholder='Imie'>{this.props.item.firstName}</p>
                    <p className = "contactLabel" placeholder='Nazwisko'>{this.props.item.lastName}</p>
                    <a className = "contactEmail" href={ 'mailto:'+this.props.item.email}>{this.props.item.email}</a>
                </div>
            </div>

/*            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                }),
                React.createElement('div', {className: 'contactInfo'},
                    React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
                        this.props.item.email)
                ))*/
        )
    }
});