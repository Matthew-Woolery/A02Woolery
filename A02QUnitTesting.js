

QUnit.test("Testing QUnit Functionality", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});


QUnit.test('get grade uppercase', function (assert) {
    assert.strictEqual(getgrade("A") , 4, 'A=4');

   
});
QUnit.test('get grade lowercase', function (assert) {
  
    assert.strictEqual(getgrade("a") , 4, 'a = 4');

   
});
QUnit.test('get grade 1', function (assert) {
  
    assert.strictEqual(getgrade(1) , 0, 'return 0 for numbers');

   
});
QUnit.test('get grade E', function (assert) {
  
    assert.strictEqual(getgrade("E") , 0, 'return 0 for non letter grades');

   
});