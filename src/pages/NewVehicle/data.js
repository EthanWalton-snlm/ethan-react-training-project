import { sentenceCase } from "../../utils/sentenceCase";

const makeFields = (keys) =>
  keys.map((key) => ({ key, placeholder: sentenceCase(key) }));

const editableFields = [
  "imageLink",
  "registrationNumber",
  "fullName",
  "street",
  "city",
  "province",
  "postalCode",
  "country",
];

const vehicleFields = makeFields([
  "imageLink",
  "year",
  "color",
  "registrationNumber",
  "mileage",
]);

const ownerFields = makeFields(["fullName", "idNumber"]);

const addressFields = makeFields([
  "street",
  "city",
  "province",
  "postalCode",
  "country",
]);

const policyFields = makeFields(["excess", "paymentMethod"]);

export {
  editableFields,
  vehicleFields,
  ownerFields,
  addressFields,
  policyFields,
};
