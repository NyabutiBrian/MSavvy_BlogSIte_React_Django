import React from 'react'

const Search = () => {
  return (
      <form action="">
          <div class="input-group">
              <input type="search" class="form-control" placeholder="Search" aria-label="Search"
                  aria-describedby="button-addon2" />
              <button class="btn btn-info btn-lg" type="button" id="button-addon2">
                  <i class="fas fa-search"></i>
              </button>
          </div>
      </form>
  )
}

export default Search;