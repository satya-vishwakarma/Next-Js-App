import { ObjectId } from 'mongodb';
import { UserData } from '../dto/index.dto';

export const removeMongoDbFeilds = () => {
  return 'Abc';
};

export const mongodbDateFormat = (
  field: string,
  format: string = '%Y/%m/%d',
) => {
  return {
    $dateToString: {
      format: format,
      date: field,
    },
  };
};

export const getUsersDataFromRequest = (request): UserData => {
  if (request && request.user) {
    return request.user;
  } else {
    return null;
  }
};

/**
 * Constructs an object with createdAt, updatedAt, createdBy, and updatedBy fields.
 * @param userId - The MongoDB ObjectId representing the user who created or updated the entity.
 * @returns An object with createdAt, updatedAt, createdBy, and updatedBy fields.
 * @throws Error if userId is not a valid MongoDB ObjectId.
 */

export const defaultCreatedAndUpdatedBy = (userId: ObjectId) => {
  if (!(userId instanceof ObjectId) && !ObjectId.isValid(userId)) {
    throw new Error('userId must be a valid MongoDB ObjectId');
  }

  const currentDate = new Date();
  return {
    createdAt: currentDate,
    updatedAt: currentDate,
    createdBy: userId,
    updatedBy: userId,
  };
};
