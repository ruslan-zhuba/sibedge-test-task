import * as R from 'ramda';

export const pathGteDate = (path, date) =>
  R.pipe(
    R.path(path),
    R.lte(date),
  );
