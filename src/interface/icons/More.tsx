import * as React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/search/?q=Misc&i=932100
// more by K Ξ L L Ξ R from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="icon" {...props}>
    <path
      d="M470,36 C461.163444,36 454,28.836556 454,20 C454,11.163444 461.163444,4 470,4 C478.836556,4 486,11.163444 486,20 C486,28.836556 478.836556,36 470,36 Z M470,34 C477.731986,34 484,27.7319865 484,20 C484,12.2680135 477.731986,6 470,6 C462.268014,6 456,12.2680135 456,20 C456,27.7319865 462.268014,34 470,34 Z M476,22 C474.895431,22 474,21.1045695 474,20 C474,18.8954305 474.895431,18 476,18 C477.104569,18 478,18.8954305 478,20 C478,21.1045695 477.104569,22 476,22 Z M476,21 C476.552285,21 477,20.5522847 477,20 C477,19.4477153 476.552285,19 476,19 C475.447715,19 475,19.4477153 475,20 C475,20.5522847 475.447715,21 476,21 Z M470,22 C468.895431,22 468,21.1045695 468,20 C468,18.8954305 468.895431,18 470,18 C471.104569,18 472,18.8954305 472,20 C472,21.1045695 471.104569,22 470,22 Z M470,21 C470.552285,21 471,20.5522847 471,20 C471,19.4477153 470.552285,19 470,19 C469.447715,19 469,19.4477153 469,20 C469,20.5522847 469.447715,21 470,21 Z M464,22 C462.895431,22 462,21.1045695 462,20 C462,18.8954305 462.895431,18 464,18 C465.104569,18 466,18.8954305 466,20 C466,21.1045695 465.104569,22 464,22 Z M464,21 C464.552285,21 465,20.5522847 465,20 C465,19.4477153 464.552285,19 464,19 C463.447715,19 463,19.4477153 463,20 C463,20.5522847 463.447715,21 464,21 Z"
      transform="translate(-450)"
    />
  </svg>
);

export default Icon;