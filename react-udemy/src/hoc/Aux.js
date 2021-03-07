// children is a special property here that will return only the children of this
// element, which allows us to wrap a component elsewhere with an element that
// won't be rendered to the DOM
const aux = props => props.children;

export default aux;