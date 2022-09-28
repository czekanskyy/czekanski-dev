import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import pageData from './pageData';
import project from './project';
import skill from './skill';
import social from './social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([pageData, project, skill, social]),
});
