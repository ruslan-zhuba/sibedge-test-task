import * as R from 'ramda';

export const serializeText = R.pipe(
  R.replace(/[-() ]/g, ''),
  R.toLower,
  R.trim
);
