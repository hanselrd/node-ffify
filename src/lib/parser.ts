import shell from 'shelljs';
import { v4 as uuid } from 'uuid';
import { INode } from './node';

export const parse = (
  file: string,
  useStdlib: boolean,
  useCompilerExtensions: boolean,
  includes?: string[],
  defines?: string[]
) => {
  const tmpFile = `/tmp/ffify_${uuid()}_pp`;

  if (shell.which('gcc')) {
    let cmd = `gcc ${!useStdlib ? '-nostdinc' : ''} -E ${
      !useStdlib ? '-Ideps/pycparser/utils/fake_libc_include' : ''
    }`;

    if (!useCompilerExtensions) {
      if (!defines) {
        defines = [];
      }
      defines.push('__attribute__(x)=', '__pragma(x)=', '__declspec(x)=');
    }

    if (defines) {
      defines.forEach(define => {
        cmd = cmd.concat(` -D'${define}'`);
      });
    }

    if (includes) {
      includes.forEach(include => {
        cmd = cmd.concat(` -I${include}`);
      });
    }

    cmd = cmd.concat(` ${file} > ${tmpFile}`);

    console.log(cmd);

    shell.exec(cmd);

    if (shell.which('python3')) {
      shell.exec(`python3 deps/pycparser/examples/c_json.py ${tmpFile} > ${tmpFile}.json`);

      return JSON.parse(shell.cat(`${tmpFile}.json`).stdout) as INode;
    }
  }
};
