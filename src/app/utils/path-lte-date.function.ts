import * as R from 'ramda';

export const pathLteDate = (path, date) =>
  R.pipe(
    R.path(path),
    R.gte(date)
  );
