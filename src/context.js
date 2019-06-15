import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Steve Steve',
                email: 's.stevenidis+4@gmail.com',
                phone: '44444',
            },
            {
                id: 2,
                name: 'Stef Stef',
                email: 's.stevenidis+5@gmail.com',
                phone: '55555',
            },
            {
                id: 3,
                name: 'Stefan Stefan',
                email: 's.stevenidis+6@gmail.com',
                phone: '6666',
            },
        ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer