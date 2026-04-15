import React, { type FC } from "react"
import { useSelector } from "react-redux"

const UserList: FC = () => {
  const a = useSelector((state) => state)
  console.log(a)

  return <div></div>
}

export default UserList
