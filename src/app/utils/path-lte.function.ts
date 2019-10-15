import * as R from 'ramda';

export const pathLte = (path, date) =>
  R.pipe(
    R.path(path),
    R.gte(date)
  );
