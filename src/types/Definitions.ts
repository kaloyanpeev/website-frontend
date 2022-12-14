export interface DefinitionTypes {
  definition?: string;
  partOfSpeech?: string;
  synonyms?: string[];
  typeOf?: string[];
  hasParts?: string[];
  hasTypes?: string[];
  memberOf?: string[];
  antonyms?: string[];
}

export interface DefinitionItemTypes {
  data: DefinitionTypes;
  index: number;
}
