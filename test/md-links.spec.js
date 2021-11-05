const {files} = require('../lib/findFiles.js');


describe('Files', () => {

  it('should be a function', () => {
    expect(typeof files).toBe('function');
  });

  // it('Should be a object', () => {
  //   expect(typeof files('../CDMX011-md-links/README.md')).toBe('object');
  // })

});
