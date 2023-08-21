import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagStep } from "../../structures/TagStep";

export const test_misc_isClone_TagStep = _test_misc_isClone("TagStep")<TagStep>(
    TagStep,
)((input) => typia.misc.isClone<TagStep>(input));