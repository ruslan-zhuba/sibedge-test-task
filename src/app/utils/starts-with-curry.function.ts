import * as R from 'ramda';
import { serializeTextFn } from './serialize-text.function';

export const startsWithCurryFn = (path, text) =>
  R.pipe(
    R.path(path),
    serializeTextFn,
    R.startsWith(text)
  );
