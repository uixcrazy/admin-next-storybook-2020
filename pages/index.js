import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import withStyles from 'react-jss';
import { wrapperStoreSaga as wrapper } from 'core/store-saga/configureStore'
import { loadUsers } from 'app/users/store/actions';
import Page from 'app/users/components/Page'


const Index = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(startClock())
  // }, [dispatch])

  return <Page title="Index Page" linkTo="/dashboard" NavigateTo="Other Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

  if (!store.getState().placeholderData) {
    store.dispatch(loadUsers())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Index

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
// export default withStyles(styles)(Index)
