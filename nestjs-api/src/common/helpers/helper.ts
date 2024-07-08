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
