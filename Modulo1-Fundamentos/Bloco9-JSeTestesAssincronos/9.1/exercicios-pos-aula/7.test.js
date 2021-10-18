const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Test if string is converted to uppercase', (done) => {
  uppercase('test', (str) => {
    try{
      expect(str).toBe('TEST');
      done();
    }catch(error){
      done(error);
    }
  })
})