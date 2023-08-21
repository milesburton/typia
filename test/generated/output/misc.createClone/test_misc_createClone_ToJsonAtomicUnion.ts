import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_misc_clone_ToJsonAtomicUnion = _test_misc_clone(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    (input: ToJsonAtomicUnion): typia.Primitive<ToJsonAtomicUnion> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem &&
                null !== elem &&
                "function" === typeof elem.toJSON
                    ? (elem.toJSON() as any)
                    : (elem as any),
            );
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);