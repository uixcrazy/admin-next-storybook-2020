import Link from 'next/link'
import { useSelector } from 'react-redux'

function Page({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => {
    console.log(state)
// làm sao đặt typicodeUsersReducer thành chung
    return state.typicodeUsersReducer.placeholderData
  })
  const error = useSelector((state) => state.error)
  console.log(placeholderData)
  return (
    <div>
      <h1>{title}</h1>
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default Page
