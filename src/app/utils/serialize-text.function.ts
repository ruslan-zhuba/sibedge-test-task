import * as R from 'ramda';

export const serializeTextFn = R.pipe(
  R.replace(/[-() ]/g, ''),
  R.toLower,
  R.trim
);
