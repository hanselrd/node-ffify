import { parse } from './parser';

parse(
  '/tmp/redis/src/redis-cli.c',
  [
    '/tmp/redis/src',
    '/tmp/redis/deps/lua/src',
    '/tmp/redis/deps/hiredis',
    '/tmp/redis/deps/linenoise'
  ]
);
