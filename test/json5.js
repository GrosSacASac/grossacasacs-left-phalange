import testRunner from './helpers/test-runner.js'

const data = {left: 'phalange'}

const testObject = {
  type: 'json5',
  data,
  string: "{left:'phalange'}",
  prettyString: `{
  left: 'phalange',
}`,
  malformed: 'left: [phalange',
}

testRunner(testObject)
