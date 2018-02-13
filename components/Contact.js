var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            <div className = "contactItem">
                <img className = "contactImage" src= 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'/>
                <div className = "contactInfo">
                    <p className = "contactLabel"></p>
                    <p className = "contactLabel"></p>
                    <a className = "contactEmail"></a>
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