import { END } from 'redux-saga'
import { wrapperStoreSaga as wrapper } from 'core/store-saga/configureStore'
import { loadUsers, BRANCH_NAME } from 'app/users/store';
import Layout from 'app/Layout';
import Page from 'app/users/components/Page';

function UserPage() {
  return <Page />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

  if (!store.getState()[BRANCH_NAME].placeholderData) {
    store.dispatch(loadUsers())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})


UserPage.Layout = Layout;

export default UserPage;
