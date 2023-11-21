import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createDecode_ObjectIntersection =
  _test_protobuf_decode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    decode: (input) => typia.protobuf.decode<ObjectIntersection>(input),
    encode: typia.protobuf.createEncode<ObjectIntersection>(),
  });