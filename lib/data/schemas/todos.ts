export const todos_schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer"
      },
      user_id: {
        type: "integer"
      },
      title: {
        type: "string"
      },
      due_on: {
        type: "string",
        format: "date-time"
      },
      status: {
        type: "string",
        enum: ["pending", "completed"]
      }
    },
    required: ["id", "user_id", "title", "due_on", "status"]
  }
};
