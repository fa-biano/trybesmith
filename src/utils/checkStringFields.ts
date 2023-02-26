export default function checkStringFields(fieldToCheck: string | undefined, fieldName: string) {
  if (!fieldToCheck) {
    const error = new Error(`"${fieldName}" is required`);
    error.name = 'Bad_Request';
    throw error;
  }

  if (typeof fieldToCheck !== 'string') {
    const error = new Error(`"${fieldName}" must be a string`);
    error.name = 'Unprocessable_Entity';
    throw error;
  }
  
  if (fieldToCheck.length < 3) {
    const error = new Error(`"${fieldName}" length must be at least 3 characters long`);
    error.name = 'Unprocessable_Entity';
    throw error;
  }
}