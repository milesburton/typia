import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagRange } from "../../structures/TagRange";

export const test_misc_isPrune_TagRange = _test_misc_isPrune<TagRange>(
    TagRange,
)((input) => typia.misc.isPrune<TagRange>(input));