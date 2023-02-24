import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectIntersection = _test_validatePrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidatePrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);