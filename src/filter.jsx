import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import filter from './assets/settings.png'
import filterOff from './assets/filter-off.png'
import downArrow from './assets/down-arrow.png'
import rightArrow from './assets/right-arrow.png'
import StarOn from './assets/star-on.png'
import StarOff from './assets/star-off.png'
import Reset from './assets/refresh.png'
import { useFilterStore } from './StoreHandler'

export const FilterContainer = styled.div`
	width: calc(100% - 32px);
	margin: 12px;
	margin-top: 0;
	padding: 4px;
	border-radius: 4px;
	background-color: var(--color-highlight);
	color: white;
	font-weight: 500;
	opacity: ${(props) => (props.active ? 1 : 0.5)};
	img{
		height: 40px;
	}
`
export const FilterHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;
	letter-spacing: 1px;
	span{
		padding: 4px;
	}
`
export const FilterIcon = styled.div`
	display: flex;
	border-right: solid 2px black;
	height: 40px;
	padding-right: 4px;
	margin-right: 12px;
`
export const FilterBody = styled.div`
	margin-top: 4px;
	border-top: 2px solid black;
	padding-top: 4px;
`
export const FilterItem = styled.div`
	padding: 4px;
	display: flex;
	opacity: ${(props) => (props.active ? 1 : 0.8)};
	pointer-events: ${(props) => (props.clickable ? 'all' : 'none')};
	/* cursor: 'not-allowed'; */
	/* cursor: ${(props) => (props.clickable ? 'default' : 'notAllowed')}; */
	img{
		height: 20px;
	}
	
`
export const FilterItemLabel = styled.div`
	width: 110px;
	display: flex;
	align-items: center;
	img{
		padding-right: 4px;
	}
`
export const FilterItemValues = styled.div`
	width: calc(100% - 80px);
	display: flex;
	justify-content: space-between;
`
const FilterInput = styled.input`
	width: 44px;
	font-size: large;
	/* height: 24px; */
`

const Filter = () => {

	const [expanded, setExpanded] = useState(true)

	const [priority, setPriority] = useState([1, 5])
	const[l, r] = priority;
	const priorityFilterActive = (l > 1 || r < 5) ? 1 : 0;
	
	const [progress, setProgress] = useState([0, 100])
	const [lProgress, rProgress] = progress;
	const progressFilterActive = (lProgress > 0 || rProgress < 100) ? 1 : 0;
	
	const applied = priorityFilterActive + progressFilterActive;

	const updatePriority = (e, value) => {
		const offsetX = e.nativeEvent.offsetX;
    	const imageWidth = e.target.width;
		if(offsetX * 2 < imageWidth) {
			if(value <= r)
				setPriority([value, r]);
		} else {
			if(value >= l)
				setPriority([l, value])
		}
	}

	const deleteFilter = useFilterStore(state => state.deleteFilter);
	const toggleFilter = useFilterStore(state => state.toggleFilter);
	const addFilter = useFilterStore(state => state.addFilter);
	const toFilter = useFilterStore(state => state.toFilter);
	// const {addFilter, deleteFilter, toFilter, toggleFilter} = useFilterStore(state => state.addFilter);

	useEffect(() => {
		deleteFilter('priority');
		if((l > 1 || r < 5)) addFilter({field: 'priority', max: r, min: l})
	}, [priority]);
	useEffect(() => {
		deleteFilter('progress');
		if((lProgress > 0 || rProgress < 100)) addFilter({field: 'progress', max: rProgress, min: lProgress})
	}, [progress]);

  return (
    <FilterContainer active={toFilter}>
        <FilterHeader>
			<FilterIcon onClick={toggleFilter} className='clickable'>
            	<img src={toFilter? filter:filterOff} alt='filter'/>
			</FilterIcon>
            <span>Filter {applied ? `(${applied})` : ''}</span>
            <img 
				className='clickable'
				src={expanded ? downArrow : rightArrow}
				alt='collapse'
				onClick={() => setExpanded(!expanded)}
			/>
        </FilterHeader>
				{ expanded && <FilterBody>
					<FilterItem active={priorityFilterActive} clickable={toFilter}>
						<FilterItemLabel>
							{priorityFilterActive ? <img
								src={Reset}
								alt='reset-filter'
								onClick={() => setPriority([1, 5])}
								className='clickable'
							/> : null}
							<span>Priority :</span>
						</FilterItemLabel>
						<FilterItemValues>
						{
                [1, 2, 3, 4, 5].map((id) => {
                    return (<img 
                        alt=''
                        src={priority[0] <= id && priority[1] >= id ? StarOn : StarOff}
                        onClick={(e) => updatePriority(e, id)}
						key={id}
						className='clickable'
                    />
                )})
            }
				</FilterItemValues>
					</FilterItem>
					<FilterItem active={progressFilterActive} clickable={toFilter}>
						<FilterItemLabel>
							{progressFilterActive ? <img
								src={Reset}
								alt='reset-filter'
								onClick={() => setProgress([0, 100])}
								className='clickable'
							/> : null}
							<span>Progress :</span>
						</FilterItemLabel>
						<FilterItemValues>
							<FilterInput 
								type='number'
								value={Math.min(progress[1], progress[0])}
								onChange={(e) => setProgress([Math.min(e.target.value, progress[1]), progress[1]])}
								min={0}
								max={100}
								/>
							-
							<FilterInput 
								type='number'
								value={Math.max(progress[1], progress[0])}
								onChange={(e) => setProgress([progress[0], Math.max(e.target.value, progress[0])])}
								min={0}
								max={100}
							/>
						</FilterItemValues>
					</FilterItem>
					</FilterBody>}
    </FilterContainer>
  )
}

export default Filter