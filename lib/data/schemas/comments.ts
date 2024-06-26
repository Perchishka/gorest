export const comments_schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer"
      },
      post_id: {
        type: "integer"
      },
      name: {
        type: "string"
      },
      email: {
        type: "string",
        format: "email"
      },
      body: {
        type: "string"
      }
    },
    required: ["id", "post_id", "name", "email", "body"]
  }
};
