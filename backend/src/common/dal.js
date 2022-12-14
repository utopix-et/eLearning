const getOne = (model) => {
  return async (props) => {
    const response = await model.findOne(props, { password: 0 });
    // console.log('res')
    // console.log(response)
    return response;
  };
};

const getAll = (model) => async (props) => {
  return await model.find(props).sort({ updatedAt: -1 });
};

const createOne = (model) => async (props) => {
  return await model.create(props);
};

const updateOne =
  (model) =>
  async (filter = {}, props) => {
    return await model.findOneAndUpdate(
      filter,
      {
        $set: props.set || new Object(),
        $push: props.push || new Object(),
        $pop: props.pop || new Object(),
        $inc: props.inc || new Object(),
      },
      { upsert: true }
    );
  };
const deleteOne = (model) => async (filter) => {
  return await model.findAndDelete(filter);
};
const dataAccessLayer = (model) => ({
  getOne: getOne(model),
  getAll: getAll(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model),
});

module.exports = dataAccessLayer;
