export function createElement(tagName, attributes) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach(attributKey => {
    element[attributKey] = attributes[attributKey];
  });
  return element;
}

export function appendContent(parent, content) {
  if (Array.isArray(content)) {
    content.forEach(item => {
      parent.appendChild(item);
    });
  } else {
    parent.appendChild(content);
  }
}

export function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
