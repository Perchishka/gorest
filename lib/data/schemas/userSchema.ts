import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv();

interface UserObject {
    name: string,
    email: string,
    gender: string,
    status: string,
}


const schema : JSONSchemaType<UserObject> = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    gender: { type: "string" },
    status: { type: "string" },
  },
  additionalProperties: false
}


const validate = ajv.compile(schema);

export {validate};
// 