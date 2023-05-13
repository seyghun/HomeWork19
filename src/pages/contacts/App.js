import { Fragment, useState } from 'react';
import './App.css';
import lupa from './search.png';

const contacts_all = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
];

function Contact(props) {
  return (
    <div className='contacts'>
      <p>Ім'я :{props.firstName}</p>
      <p>Прізвище : {props.lastName}</p>
      <p>Номер телефону: {props.phone}</p>
      <p>Стать : {props.gender}</p>
    </div>
  )
}
function Contacts() {
  const [contacts, setContacts] = useState(contacts_all);
  const [search, setSearch] = useState("")


  let elements = [];

  contacts.forEach((el, i) => {
    elements.push(
      <Contact firstName={el.firstName} lastName={el.lastName} phone={el.phone} gender={el.gender} key={i} />
    );
  });

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setContacts(contacts_all.filter(el => el.lastName.includes(search)))
  };


  return (
    <Fragment>
      <div className='search-box'>
        <img className='lupa' src={lupa} alt='search'></img>
        <input className='search' placeholder='Find a person...' value={search} onChange={(event) => { handleSearchChange(event) }} />
      </div>
      <div className='contacts_number'>
        {elements}
      </div>
    </Fragment>
  )
};
function App() {
  return (
    <Contacts />
  );
};

export default App;
