import React from 'react'
import styled from 'styled-components'
import search from './assets/search.png'
import { useSearchStore } from './StoreHandler'

const SearchContainer = styled.div`
  width: calc(100% - 32px);
	margin: 12px;
	margin-top: 0;
	padding: 4px;
	border-radius: 4px;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
	background-color: var(--color-highlight);
	font-weight: 500;
  font-size: large;
  display: flex;
  img{
    margin: 4px;
    transform: rotate(90deg);
    
  }
  `
const SearchInput = styled.input`
  width: 100%;
  margin-right: 4px;
  background-color: var(--color-primary);
  border-radius: 4px;
  color: white;
`

const SearchTask = () => {
  const setSearchParam = useSearchStore(state => state.setSearchParam);
  return (
    <SearchContainer 
    >
      <SearchInput 
        placeholder='Search...'
        onChange={e => setSearchParam(e.target.value)}
      />
      <img src={search} height={30} alt='search'/>
    </SearchContainer>
  )
}

export default SearchTask