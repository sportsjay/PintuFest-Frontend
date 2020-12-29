export const composeWithNameSpace = (typeList, namespace = "") =>
  typeList.reduce(
    (actions, type) => ({ ...actions, [type]: `${namespace}${type}` }),
    {}
  );
