import React from 'react';
import * as icons from 'icons';

export default {
  title: 'Icons/Kiwi Icons',
};

export const KiwiIcons = () => (
  <div>
    {Object.keys(icons).map(key => {
      const Icon = icons[key];
      return (
        <div key={key}>
          <Icon />&ensp; &emsp;
          <span>&lt;{key} &frasl;&gt;</span>
        </div>
      )
    })}
  </div>
)

KiwiIcons.story = {
  name: 'default',
};




// import React from 'react';
// import { storiesOf } from '@storybook/react';

// import KeyboardIcon from '../material-icons/Keyboard';
// import KeyboardArrowDownIcon from '../material-icons/KeyboardArrowDown';
// import EmailOutlinedIcon from '../material-icons/EmailOutlined';
// import ClearIcon from '../material-icons/Clear';
// import FeedbackOutlinedIcon from '../material-icons/FeedbackOutlined';

// import Calendar from '../others/Calendar';

// /**
//  * https://material-ui.com/components/icons/#svg-icons
//  */

// storiesOf('BASICS | Icon', module)
//   .add('material-icons', () => (
//     <div>
//       <button>Hello button</button>
//       <KeyboardIcon />
//       <KeyboardArrowDownIcon />
//       <EmailOutlinedIcon />
//       <FeedbackOutlinedIcon />
//       <ClearIcon />
//       <Calendar
//         viewBox="0 0 1393 1500"
//       />
//       {/* <DeleteTwoToneIcon className={classes.icon} /> */}
//     </div>
//   ))
