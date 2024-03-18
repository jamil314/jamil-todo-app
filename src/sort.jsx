import React, { useEffect, useState } from 'react'
import sortIcon from "./assets/sort.png";
import downArrow from "./assets/down-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import arrows from "./assets/arrows.png";
import { FilterBody, FilterContainer, FilterHeader, FilterIcon, FilterItem, FilterItemLabel, FilterItemValues } from './filter'
import styled from "styled-components";
import { useSortStore } from './StoreHandler';

const SortItem = styled(FilterItem)`
	pointer-events: all;
  &.colHeader{
    opacity: 1;
    border-bottom: 2px solid black;
    font-style: italic;
  }
`



const Sort = () => {

  const [expanded, setExpanded] = useState(true);
  const [catagory, setCatagory] = useState([
    {param:'Priority', value:0},
    {param:'Progress', value:0},
    {param:'Deadline', value:0},
  ])

  const updateCatagory = useSortStore(state => state.updateCatagory);

  const setValue = (param, value) => {
    setCatagory(catagory.map(cat => cat.param === param ? {...cat, value: value} : cat))
  }
  const applied = catagory.reduce((acc, val) => {return acc + (val.value !== 0 ? 1 : 0)}, 0);

  const moveUp = id => {
    if(id === 1) setCatagory([catagory[1], catagory[0], catagory[2]]);
    if(id === 2) setCatagory([catagory[0], catagory[2], catagory[1]]);
  }

  useEffect(() => {
    updateCatagory(catagory)
  }, [catagory])
  

  return (
    <FilterContainer active={true}>
      <FilterHeader>
        <FilterIcon>
          <img src={sortIcon} alt=''/>
        </FilterIcon>
        <span>Sort {applied ? `(${applied})` : ''}</span>
        <img 
          src={expanded ? downArrow : rightArrow}
          alt='collapse'
          onClick={() => setExpanded(!expanded)}
        />
      </FilterHeader>
    {expanded && <FilterBody>
        <SortItem className='colHeader'>
          <FilterItemLabel>
            <span> Parameter </span>
          </FilterItemLabel>
          <FilterItemValues>
            <span> Asc </span>
            <span> Des </span>
            <span> none </span>
          </FilterItemValues>
        </SortItem>

        {catagory.map((cat, id) => {
          return (<SortItem key={id} active={cat.value !== 0}>
            <img src={arrows} alt='' onClick={() => moveUp(id)}/>
            <FilterItemLabel>
              <span> {cat.param} </span>
            </FilterItemLabel>
            <FilterItemValues>
              <input type='radio' checked={cat.value === 1} onClick={() => setValue(cat.param, 1)}/>
              <input type='radio' checked={cat.value === -1} onClick={() => setValue(cat.param, -1)}/>
              <input type='radio' checked={cat.value === 0} onClick={() => setValue(cat.param, 0)}/>
            </FilterItemValues>
          </SortItem>)
        })}
      </FilterBody>}
    </FilterContainer>
  )
}

export default Sort