import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_notation_createValidateSnake_AtomicSimple =
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.SnakeCase<AtomicSimple>
  >({
    convert: (input: any): typia.IValidation<typia.SnakeCase<AtomicSimple>> => {
      const validate = (input: any): typia.IValidation<AtomicSimple> => {
        const errors = [] as any[];
        const __is = (input: any): input is AtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicSimple => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "AtomicSimple",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $report(true, {
                    path: _path + "",
                    expected: "[boolean, number, string]",
                    value: input,
                  })) &&
                [
                  "boolean" === typeof input[0] ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "boolean",
                      value: input[0],
                    }),
                  ("number" === typeof input[1] && Number.isFinite(input[1])) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "number",
                      value: input[1],
                    }),
                  "string" === typeof input[2] ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "string",
                      value: input[2],
                    }),
                ].every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "AtomicSimple",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const general = (input: AtomicSimple): typia.SnakeCase<AtomicSimple> => {
        return Array.isArray(input) &&
          input.length === 3 &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          "string" === typeof input[2]
          ? ([input[0] as any, input[1] as any, input[2] as any] as any)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<AtomicSimple> => {
      const __is = (input: any): input is typia.SnakeCase<AtomicSimple> => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          "string" === typeof input[2]
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<AtomicSimple> => {
          const $guard = (typia.createAssert as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicSimple",
                value: input,
              })) &&
              (input.length === 3 ||
                $guard(true, {
                  path: _path + "",
                  expected: "[boolean, number, string]",
                  value: input,
                })) &&
              ("boolean" === typeof input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                })) &&
              (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                })) &&
              ("string" === typeof input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "string",
                  value: input[2],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicSimple",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });