
import withStyles from 'react-jss';

const Sidebar = withStyles({
  // wrapper: { },

  })(({
    classes,
    // other props
  }) => {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  // }
  });


