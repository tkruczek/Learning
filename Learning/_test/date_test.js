/**
 * 
 */

TestCase('Date test', {
  'test should be offset by 2': function () {
    var d = new Date();
    assertEquals(2, d.getHours() - d.getUTCHours()); 
  },
  'test should change the local time': function () {
    var d = new Date();
    d.setUTCHours(0);
    assertEquals(2, d.getHours());
  },
  'test shoudl return NaN': function () {
    assertNaN(Date.parse('bla'));
  },
  'test should return 0 hours in UTC': function () {
    var today = new Date(Date.UTC(2012, 8, 27));
    assertEquals(0, today.getUTCHours());
  },
  'test should return timezone difference': function () {
    var today = new Date();
    assertEquals(2, today.getHours() - today.getUTCHours());
  },
  'test should create local time': function () {
    var nowLocal = new Date(2012, 8, 27);
    var nowUTC = new Date(Date.UTC(2012, 8, 27));
    assertNotEquals(nowLocal, nowUTC);
    assertEquals(nowLocal.getHours() + 2, nowUTC.getHours());
    assertTrue(nowUTC > nowLocal);
  },
  'test should implement now() method': function () {
    assertFunction(Date.now);
    assertNumber(Date.now());
  }
});

