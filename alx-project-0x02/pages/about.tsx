// pages/about.tsx

import React from 'react'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="mb-6">
          Welcome to the About Page. This page demonstrates the reusable Button component.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  )
}

export default AboutPage
