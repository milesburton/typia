import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validate_ObjectAlias = _test_validate(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validate(input),
    ObjectAlias.SPOILERS,
);