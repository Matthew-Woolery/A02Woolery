

QUnit.test("Testing QUnit Functionality", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});


QUnit.test('No Paramaters, return 0', function (assert) {
    assert.strictEqual(gpacalc() , 0, 'No parameters returns 0');

   
});
QUnit.test('A,4  return 4', function (assert) {
    G1= "A";
    C1= 4;
    assert.strictEqual(gpacalc() , 4, 'A,4 equals 4');

   
});