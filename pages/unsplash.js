import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import withStyles from 'react-jss';
import { wrapperStoreSaga as wrapper } from 'core/store-saga/configureStore'
import { loadPhotos, BRANCH_NAME } from 'app/unsplash/store';
import Layout from 'app/Layout';
import Page from 'app/unsplash/components/Page'

const Unsplash = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(startClock())
  // }, [dispatch])

  return <Page />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

  if (!store.getState()[BRANCH_NAME].photos) {
    store.dispatch(loadPhotos())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

Unsplash.Layout = Layout;
export default Unsplash

// const styles = {
//   container: {
//     marginTop: 100,
//     textAlign: 'center',
//   },

//   header: {
//     fontSize: 24,
//     lineHeight: 1.25,
//   },
// }
// export default withStyles(styles)(Unsplash)
