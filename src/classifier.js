export const CLASSIFIER_FIELDS = {
  sId: "sId",
  description: "description",
  fullName: "fullName",
  shortName: "shortName",
  signValue: "signValue",
  fields: "fields"
};
export class Classifier {
  constructor({
    sId = "",
    description = "",
    fullName = "f",
    shortName = "",
    signValue = "",
    fields = []
  } = {}) {
    this[CLASSIFIER_FIELDS.sId] = sId;
    this[CLASSIFIER_FIELDS.description] = description;
    this[CLASSIFIER_FIELDS.fullName] = fullName;
    this[CLASSIFIER_FIELDS.shortName] = shortName;
    this[CLASSIFIER_FIELDS.signValue] = signValue;
    this[CLASSIFIER_FIELDS.fields] = fields;
  }

  fullNameSelf = () => {
    return this.fullName;
    // return this.hasOwnProperty('fullName')
  };
}
