import React, { useState } from "react";
import history from '../../historyUtils';
import {Box, Wrapper, Head} from './Styles';
import {data} from '../../data';
import Search from "../search/search";

function Home() {
    const [filterKey, setFilter] = useState('');
    const onFilterChange = e => {
        const val = e.target.value;
        setFilter(val);
    }
    const filteredData = data.filter(ele => ele.subject.toLowerCase().includes(filterKey.toLowerCase()) || ele.class.toString().toLowerCase().includes(filterKey.toLowerCase()));
    return (
      <Wrapper>
          <Search value={filterKey} onChange={onFilterChange} />
        {filteredData.map(ele => (<Box key={ele.id} onClick={() => history.push(`/about?id=${ele.id}`)}>
          <Head>{ele.subject}</Head>
          <h4>Class: {ele.class}</h4>
        </Box>))}
      </Wrapper>
     
    );
  }

  export default Home;