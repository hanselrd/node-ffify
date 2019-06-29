import shell from 'shelljs';
import { v4 as uuid } from 'uuid';

export const parse = (
  file: string,
  includes: string[]
) => {
  const tmpFile = `/tmp/ffify_${uuid()}_pp.c`;
  let cmd = `gcc -nostdinc -E -D'__attribute__(x)=' -D'__pragma(x)=' -D'__declspec(x)=' -Ideps/pycparser/utils/fake_libc_include`;
  includes.forEach(
    include => {
      cmd = cmd.concat(
        ` -I${include}`
      );
    }
  );
  cmd = cmd.concat(
    ` ${file} > ${tmpFile}`
  );
  console.log(
    cmd
  );
  if (
    shell.exec(
      cmd
    )
      .code ===
    0
  ) {
    return shell.exec(
      `python3 deps/pycparser/examples/c_json.py ${tmpFile}`
    )
      .stdout;
  }
};
