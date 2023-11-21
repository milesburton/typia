import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_createIsDecode_ClassMethod = _test_protobuf_isDecode(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  decode: (input: Uint8Array): typia.Resolved<ClassMethod> | null => {
    const is = (input: any): input is ClassMethod => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    const decode = (input: Uint8Array): typia.Resolved<ClassMethod> => {
      const $Reader = (typia.protobuf.createIsDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          name: "" as any,
          age: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.name = reader.string();
              break;
            case 2:
              // double;
              output.age = reader.double();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $Reader(input);
      return $pdo0(reader);
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  },
  encode: (input: ClassMethod): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "name";
        writer.uint32(10);
        writer.string(input.name);
        // property "age";
        writer.uint32(17);
        writer.double(input.age);
      };
      //ClassMethod.Animal;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});