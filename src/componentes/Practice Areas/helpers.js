export const mapComponents = (data, ComponentType) =>
  data.map((item) => <ComponentType {...item} key={item.key} />);
