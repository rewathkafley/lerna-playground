module.exports = {
  name: 'stepper',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/stepper',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
