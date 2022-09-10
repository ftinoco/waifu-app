import Payments from './Payments';
import Catalogos from './Catalogos'; 
import { FC } from 'react';  

// creating an object with components as properties to swap
const components = {
  "catalogos": Catalogos,
  "pagos": Payments
};
// getting name of the object properties as type
type componentsKeys = keyof typeof components;
/**
 * Render components from its name
 * @param param0 {
 *  name: name of component
 *  props: properties required by component
 * }
 * @returns Component rendered
 */
const RenderComponentByName: FC<{ 
  name: string,
  props?: any 
}> = ({ name, props }) => {
  const Tag = components[name as componentsKeys];
  return (<Tag {...props} />);
}

const PageSelector = { 
  RenderComponentByName
};
 
export default PageSelector;