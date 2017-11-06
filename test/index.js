const chai = require('chai');
const expect = chai.expect;

function testFunc (opt) {
  if (opt === undefined) {
    return Promise.reject(new Error());
  }
}

describe('testFunc', function () {
  it('return with a promise', function () {
    expect(testFunc()).to.be.a('promise');
  })
  describe('return with a promise that', function () {
    it('is rejected when no parameters are passed to it', async function () {
      try {
        const result = await testFunc();
      } catch (e) { return; }
      return Promise.reject(new Error('Should have thrown'))
    })
  });
});
