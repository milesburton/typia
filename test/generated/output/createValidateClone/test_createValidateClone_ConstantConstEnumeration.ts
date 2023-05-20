import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createValidateClone_ConstantConstEnumeration =
    _test_validateClone(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (
            input: any,
        ): typia.IValidation<typia.Primitive<ConstantConstEnumeration>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ConstantConstEnumeration> => {
                const __is = (
                    input: any,
                ): input is ConstantConstEnumeration => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem,
                        )
                    );
                };
                const errors = [] as any[];
                const $report = (typia.createValidateClone as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantConstEnumeration => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        'Array<("Four" | "Three" | 0 | 1 | 2)>',
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            0 === elem ||
                                            1 === elem ||
                                            2 === elem ||
                                            "Three" === elem ||
                                            "Four" === elem ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '("Four" | "Three" | 0 | 1 | 2)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    'Array<("Four" | "Three" | 0 | 1 | 2)>',
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: ConstantConstEnumeration,
            ): typia.Primitive<ConstantConstEnumeration> => {
                return Array.isArray(input)
                    ? input.map((elem: any) => elem as any)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        },
        ConstantConstEnumeration.SPOILERS,
    );