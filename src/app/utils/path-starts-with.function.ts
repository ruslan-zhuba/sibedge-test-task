import * as R from 'ramda';
import { serializeText } from './serialize-text.function';

export const pathStartsWith = (path, text) =>
  R.pipe(
    R.path(path),
    serializeText,
    R.startsWith(text)
  );
