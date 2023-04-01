import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createAssertPrune_TagFormat = _test_assertPrune(
    "TagFormat",
    TagFormat.generate,
    (input: any): TagFormat => {
        const assert = (input: any): TagFormat => {
            const $guard = (typia.createAssertPrune as any).guard;
            const $is_uuid = (typia.createAssertPrune as any).is_uuid;
            const $is_email = (typia.createAssertPrune as any).is_email;
            const $is_url = (typia.createAssertPrune as any).is_url;
            const $is_ipv4 = (typia.createAssertPrune as any).is_ipv4;
            const $is_ipv6 = (typia.createAssertPrune as any).is_ipv6;
            const $is_date = (typia.createAssertPrune as any).is_date;
            const $is_datetime = (typia.createAssertPrune as any).is_datetime;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagFormat => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.uuid &&
                        (true === $is_uuid(input.uuid) ||
                            $guard(_exceptionable, {
                                path: _path + ".uuid",
                                expected: "string (@format uuid)",
                                value: input.uuid,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uuid",
                            expected: "string",
                            value: input.uuid,
                        })) &&
                    (("string" === typeof input.email &&
                        (true === $is_email(input.email) ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "string (@format email)",
                                value: input.email,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    (("string" === typeof input.url &&
                        (true === $is_url(input.url) ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "string (@format url)",
                                value: input.url,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".url",
                            expected: "string",
                            value: input.url,
                        })) &&
                    (("string" === typeof input.ipv4 &&
                        (true === $is_ipv4(input.ipv4) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv4",
                                expected: "string (@format ipv4)",
                                value: input.ipv4,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ipv4",
                            expected: "string",
                            value: input.ipv4,
                        })) &&
                    (("string" === typeof input.ipv6 &&
                        (true === $is_ipv6(input.ipv6) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv6",
                                expected: "string (@format ipv6)",
                                value: input.ipv6,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ipv6",
                            expected: "string",
                            value: input.ipv6,
                        })) &&
                    (("string" === typeof input.date &&
                        (true === $is_date(input.date) ||
                            $guard(_exceptionable, {
                                path: _path + ".date",
                                expected: "string (@format date)",
                                value: input.date,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".date",
                            expected: "string",
                            value: input.date,
                        })) &&
                    (("string" === typeof input.date_time &&
                        (true === $is_datetime(input.date_time) ||
                            $guard(_exceptionable, {
                                path: _path + ".date_time",
                                expected: "string (@format datetime)",
                                value: input.date_time,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".date_time",
                            expected: "string",
                            value: input.date_time,
                        })) &&
                    (("string" === typeof input.datetime &&
                        (true === $is_datetime(input.datetime) ||
                            $guard(_exceptionable, {
                                path: _path + ".datetime",
                                expected: "string (@format datetime)",
                                value: input.datetime,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".datetime",
                            expected: "string",
                            value: input.datetime,
                        })) &&
                    (("string" === typeof input.dateTime &&
                        (true === $is_datetime(input.dateTime) ||
                            $guard(_exceptionable, {
                                path: _path + ".dateTime",
                                expected: "string (@format datetime)",
                                value: input.dateTime,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".dateTime",
                            expected: "string",
                            value: input.dateTime,
                        })) &&
                    ("string" === typeof input.custom ||
                        $guard(_exceptionable, {
                            path: _path + ".custom",
                            expected: "string",
                            value: input.custom,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<TagFormat>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const prune = (input: TagFormat): void => {
            const $is_uuid = (typia.createAssertPrune as any).is_uuid;
            const $is_email = (typia.createAssertPrune as any).is_email;
            const $is_url = (typia.createAssertPrune as any).is_url;
            const $is_ipv4 = (typia.createAssertPrune as any).is_ipv4;
            const $is_ipv6 = (typia.createAssertPrune as any).is_ipv6;
            const $is_date = (typia.createAssertPrune as any).is_date;
            const $is_datetime = (typia.createAssertPrune as any).is_datetime;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "uuid" === key ||
                        "email" === key ||
                        "url" === key ||
                        "ipv4" === key ||
                        "ipv6" === key ||
                        "date" === key ||
                        "date_time" === key ||
                        "datetime" === key ||
                        "dateTime" === key ||
                        "custom" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    TagFormat.SPOILERS,
);