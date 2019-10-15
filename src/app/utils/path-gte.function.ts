import * as R from 'ramda';

export const pathGte = (path, date) =>
  R.pipe(
    R.path(path),
    R.lte(date)
  );
