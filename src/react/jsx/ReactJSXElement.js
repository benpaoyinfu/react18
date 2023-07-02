import hasOwnProperty from "shared/hasOwnProperty";
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

// 保留的属性 这些属性不会放在props上
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

function hasValidKey(config) {
  return config.ref !== undefined;
}

function hasValidRef(config) {
  return config.ref !== undefined;
}
// 工厂方法
const ReactElement = (type, key, ref, props) => {
  // 虚拟dom
  const element = {
    $$typeof: REACT_ELEMENT_TYPE, // 每个虚拟dom都有一个节点类型
    type, // h1 span
    key, // 唯一标识
    ref, // 用来获取真实dom元素
    props, // 属性 如children, style
  };
  return element;
};

export function jsxDEV(type, config) {
  let propName; // 属性名
  const props = {}; // 属性对象
  let key = null; // 每个虚拟dom可以有一个可选的key属性，用来区分一个父节点下的不同子节点
  let ref = null; // 后面用来获取真实dom

  // 校验key
  if (hasValidKey(config)) {
    key = config.key;
  }
  // 校验ref
  if (hasValidRef(config)) {
    ref = config.ref;
  }

  for (propName in config) {
    if (
      hasOwnProperty.call(config, propName) &&
      !RESERVED_PROPS.hasOwnProperty(propName)
    ) {
      props[propName] = config[propName];
    }
  }
  return ReactElement(type, key, ref, props);
}
