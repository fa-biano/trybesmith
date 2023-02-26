export default function checkLevelField(fieldToCheck: number | undefined, fieldName: string) {
  if (fieldToCheck === undefined) {
    const error = new Error(`"${fieldName}" is required`);
    error.name = 'Bad_Request';
    throw error;
  }

  if (typeof fieldToCheck !== 'number') {
    const error = new Error(`"${fieldName}" must be a number`);
    error.name = 'Unprocessable_Entity';
    throw error;
  }
  
  if (fieldToCheck <= 0) {
    const error = new Error(`"${fieldName}" must be greater than or equal to 1`);
    error.name = 'Unprocessable_Entity';
    throw error;
  }
}