
const AddressBook = require('../../src/js/AddressBook')

describe('AddressBook', () => {
  subject(()=> new AddressBook())

  it('is expected to be an Object', () => {
    expect($subject).to.be.a('object')
  })

  it('is expected to be an instance of AddressBook', () => {
    expect($subject).to.be.instanceof(AddressBook)
  })
  
});