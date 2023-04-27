import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contact-list';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const deletedContactById = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: deletedContactById });
  };

  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localStorageContacts = localStorage.getItem(LS_KEY);
    const parsedLocalStorageContacts = JSON.parse(localStorageContacts);
    if (parsedLocalStorageContacts) {
      this.setState({ contacts: parsedLocalStorageContacts });
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        ></Filter>
        <ContactList
          contacts={this.filter()}
          onDelete={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
