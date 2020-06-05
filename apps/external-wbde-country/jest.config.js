module.exports = {
  name: 'external-wbde-country',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/external-wbde-country',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
