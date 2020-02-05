import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategorier } from '../../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window
      .fetch('https://leonardopet1.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        console.log(newShowFixed)
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = fixed => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'>loading...</Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)