import React from 'react'
import { Grid, Image, Link } from './style'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => (
          <Link to={`/detail/${fav.id}`} key={fav.id}>
            <Image src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: propTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}