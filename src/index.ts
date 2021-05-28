import filterProps from 'filter-react-props';

export default (inProps, inArray: string[] = []) => {
  const filtered = filterProps(inProps);
  return Object.keys(filtered)
    .filter((item) => !inArray.includes(item))
    .reduce((cleanProps, propName) => {
      cleanProps[propName] = inProps[propName];
      return cleanProps;
    }, {});
};
