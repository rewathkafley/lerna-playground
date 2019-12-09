module.exports = {
  name: 'components-button',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/components/button',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
