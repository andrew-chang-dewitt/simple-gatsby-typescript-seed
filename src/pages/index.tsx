import React from 'react'

import { Layout } from '../components/Layout'

const world: string = 'world'

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1>Hello {world}!</h1>
    </Layout>
  )
}
