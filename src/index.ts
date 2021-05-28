import filterProps from 'filter-react-props';

export default (inProps, inFilterList: string[] = []) => {
  const filtered = filterProps(inProps);
  return Object.keys(filtered)
    .filter((item) => !inFilterList.includes(item))
    .reduce((cleanProps, propName) => {
      cleanProps[propName] = inProps[propName];
      return cleanProps;
    }, {});
};
