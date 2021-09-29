import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductList }from "../components/ProductList"


const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-autp">
          <div className="flex justify-between h-16">
            <div className="space-x-8">Products
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <main className="max-w-7xl mx-auto">
          <ProductList />
        </main>
      </div>
    </div>
  )
}

export default Home
