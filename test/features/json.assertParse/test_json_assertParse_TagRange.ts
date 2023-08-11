import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagRange } from "../../structures/TagRange";

export const test_json_assertParse_TagRange = _test_json_assertParse<TagRange>(
    TagRange,
)((input) => typia.json.assertParse<TagRange>(input));