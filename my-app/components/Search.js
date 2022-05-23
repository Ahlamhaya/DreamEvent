import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


function Search() {

    const items = [
        {
         
            name: 'wedding'
        },
        {
            id: 1,
            name: 'Birthday'
        },
        {
            id: 2,
            name: 'Engagement'
        },
        {
            id: 3,
            name: 'baby-shower'
        },
        {
            id: 4,
            name: 'Family gathering'
        },
        {
            id: 5,
            name: 'conferences'
        },
        {
            id: 6,
            name: 'business meetings'
        },
        {
            id: 7,
            name: 'bachlor party'
        },
        {
            id: 8,
            name: 'valentines '
        },
        {
            id: 9,
            name: 'pic-nics'
        },
    ]

    
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
    
        <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
      </>
    )
  }


    return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 200 }}>
          <ReactSearchAutocomplete
            items={items}
            fuseOptions={{threshold :0.3}}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            styling={{border: "none",backgroundColor:"white"}}
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}





    


export default Search