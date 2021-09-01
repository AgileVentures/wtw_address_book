class AddressBook {
  create(data) {
    let contacts = []
    contacts.push(data)
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
    return "Yay!"
  }
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = AddressBook;
}