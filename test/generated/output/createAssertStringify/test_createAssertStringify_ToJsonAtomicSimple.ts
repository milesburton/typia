import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_createAssertStringify_ToJsonAtomicSimple =
    _test_assertStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        (input: any): string => {
            const assert = (input: any): ToJsonAtomicSimple => {
                const $guard = (typia.createAssertStringify as any).guard;
                const __is = (input: any): input is ToJsonAtomicSimple => {
                    const $io0 = (input: any): boolean => true;
                    const $io1 = (input: any): boolean => true;
                    const $io2 = (input: any): boolean => true;
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io2(input[2])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonAtomicSimple => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            true ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            true ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        const $ao2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            true ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ToJsonAtomicSimple.IToJson<boolean>>, Resolve<ToJsonAtomicSimple.IToJson<number>>, Resolve<ToJsonAtomicSimple.IToJson<string>>]",
                                    value: input,
                                })) &&
                            (input.length === 3 ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ToJsonAtomicSimple.IToJson<boolean>>, Resolve<ToJsonAtomicSimple.IToJson<number>>, Resolve<ToJsonAtomicSimple.IToJson<string>>]",
                                    value: input,
                                })) &&
                            (("object" === typeof input[0] &&
                                null !== input[0]) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ToJsonAtomicSimple.IToJson<boolean>>",
                                    value: input[0],
                                })) &&
                            $ao0(input[0], _path + "[0]", true) &&
                            (("object" === typeof input[1] &&
                                null !== input[1]) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ToJsonAtomicSimple.IToJson<number>>",
                                    value: input[1],
                                })) &&
                            $ao1(input[1], _path + "[1]", true) &&
                            (("object" === typeof input[2] &&
                                null !== input[2]) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ToJsonAtomicSimple.IToJson<string>>",
                                    value: input[2],
                                })) &&
                            $ao2(input[2], _path + "[2]", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: ToJsonAtomicSimple): string => {
                const $number = (typia.createAssertStringify as any).number;
                const $string = (typia.createAssertStringify as any).string;
                return `[${input[0].toJSON()},${$number(
                    input[1].toJSON(),
                )},${$string(input[2].toJSON())}]`;
            };
            return stringify(assert(input));
        },
    );