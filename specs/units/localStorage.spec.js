describe("localStorage", () => {
  subject(() => window.localStorage);

  it(() => is.expected.to.respondTo("setItem"));
  it(() => is.expected.to.respondTo("getItem"));
  it(() => is.expected.to.respondTo("removeItem"));
  it(() => is.expected.to.respondTo("clear"));

  describe("#setItem", () => {
    before(() => {
      $subject.setItem("foo", "bar");
    });

    it("is expected to add the chosen key", () => {
      expect($subject.data).to.haveOwnProperty("foo");
    });

    it("is expected to store the value in the chosen key", () => {
      expect($subject.data.foo).to.eql("bar");
    });
  });

  describe("#getItem", () => {
    context('existing key', () => {
      def('response', () => $subject.getItem('foo'))
      before(() => {
        $subject.setItem('foo', 'baz')
      });

      it('is expected to return the value', () => {
        expect($response).to.eql('baz')
      });

      it('is expected to return a string', () => {
        expect(typeof $response).to.eql('string')
      });
    });

    context('non existing key', () => {
      def('response', () => $subject.getItem('nonExistingKey'))

      it('is expected to return null', () => {
        expect($response).to.eql(null)
      });
    });
  });

  describe('#removeItem', () => {
    before(() => {
      $subject.setItem('foo', 'bar')
      $subject.setItem('keyToRemove', 'some value')
    });

    it('is expected to remove the item', () => {
      $subject.removeItem('keyToRemove')
      expect($subject.data).to.not.haveOwnProperty('keyToRemove')
    });
  })
  

  describe('#clear', () => {
    before(() => {
      $subject.setItem('key1', 'bar')
    });
    
    it('is expected to clear all data', () => {
      $subject.clear()
      expect($subject.data).to.not.haveOwnProperty('key1')
    });
  })
  
});
