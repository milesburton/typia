import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_createStringify_TemplateAtomic = _test_stringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input: TemplateAtomic): string => {
        const $string = (typia.createStringify as any).string;
        const $throws = (typia.createStringify as any).throws;
        const $so0 = (input: any): any =>
            `{"prefix":${$string(input.prefix)},"postfix":${$string(
                input.postfix,
            )},"middle_string":${$string(
                input.middle_string,
            )},"middle_string_empty":${$string(
                input.middle_string_empty,
            )},"middle_numeric":${$string(
                input.middle_numeric,
            )},"middle_boolean":${(() => {
                if ("string" === typeof input.middle_boolean)
                    return $string(input.middle_boolean);
                if ("string" === typeof input.middle_boolean)
                    return '"' + input.middle_boolean + '"';
                $throws({
                    expected: '("the_false_value" | "the_true_value")',
                    value: input.middle_boolean,
                });
            })()},"ipv4":${$string(input.ipv4)},"email":${$string(
                input.email,
            )}}`;
        return $so0(input);
    },
);