/** Add width and height props to component */
const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  function getSvgAttribute(key) {
    const svgAttributes = jsx["openingElement"]?.["attributes"];
    if (!svgAttributes) return;
    const attribute = svgAttributes.find(
      (attr) => attr["name"]?.["name"] === key,
    );
    return attribute["value"]?.["expression"]?.["value"];
  }

  const width = getSvgAttribute("width")?.toString();
  const height = getSvgAttribute("height")?.toString();

  return tpl`${imports}
  ${interfaces}
  
  function ${componentName}(${props}) {
    return ${jsx};
  }

  ${exports}

  export const svgHeight = ${height};
  export const svgWidth = ${width};
    `;
};

// eslint-disable-next-line no-undef
module.exports = propTypesTemplate;
