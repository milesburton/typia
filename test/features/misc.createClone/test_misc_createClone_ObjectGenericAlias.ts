import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_clone_ObjectGenericAlias =
    _test_misc_clone<ObjectGenericAlias>(ObjectGenericAlias)(
        typia.misc.createClone<ObjectGenericAlias>(),
    );