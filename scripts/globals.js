let globals =  {
  logMe : function() {
    var checkLog = ['I have been required from globals.js'];
    return console.log(checkLog);
  }
}

export default globals;
