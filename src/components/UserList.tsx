import { useEffect, type FC } from "react"

import { useTypedSelector } from "./hooks/useTypedSelector"
import { useActions } from "./hooks/useActions"

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default UserList
