import TSON from "../../../../src";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_ajv_object_literal_property =
    _test_application_swagger(
        "json schema tagged object",
        TSON.application<[ObjectJsonTag], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectJsonTag",
                },
            ],
            components: {
                schemas: {
                    ObjectJsonTag: {
                        type: "object",
                        properties: {
                            vulnerable: {
                                type: "string",
                                nullable: false,
                                deprecated: true,
                                "x-tson-jsDocTags": [
                                    {
                                        name: "deprecated",
                                    },
                                ],
                            },
                            description: {
                                type: "string",
                                nullable: false,
                                description: "Descripted property.",
                            },
                            title: {
                                type: "string",
                                nullable: false,
                                title: "something",
                                description: "Titled property.",
                                "x-tson-jsDocTags": [
                                    {
                                        name: "title",
                                        text: [
                                            {
                                                text: "something",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                            },
                            complicate_title: {
                                type: "string",
                                nullable: false,
                                title: "something weirdo with {@link something } tag",
                                description: "Complicate title.",
                                "x-tson-jsDocTags": [
                                    {
                                        name: "title",
                                        text: [
                                            {
                                                text: "something weirdo with ",
                                                kind: "text",
                                            },
                                            {
                                                text: "{@link ",
                                                kind: "link",
                                            },
                                            {
                                                text: "something ",
                                                kind: "linkText",
                                            },
                                            {
                                                text: "}",
                                                kind: "link",
                                            },
                                            {
                                                text: " tag",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                            },
                            entered_title: {
                                type: "string",
                                nullable: false,
                                title: "something content with\nenter and\nnew line",
                                description: "Entered title.",
                                "x-tson-jsDocTags": [
                                    {
                                        name: "title",
                                        text: [
                                            {
                                                text: "something content with\nenter and\nnew line",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                        nullable: false,
                        required: [
                            "vulnerable",
                            "description",
                            "title",
                            "complicate_title",
                            "entered_title",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );