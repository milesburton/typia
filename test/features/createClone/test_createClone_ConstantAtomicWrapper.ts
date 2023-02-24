import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ConstantAtomicWrapper = _test_clone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createClone<ConstantAtomicWrapper>(),
);