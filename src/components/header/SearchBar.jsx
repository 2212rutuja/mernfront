import {InputBase, List, ListItem} from '@mui/material';
import {Box} from '@mui/material';
import { styled } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search'
import { useState , useEffect} from 'react';
import {getProducts } from '../../redux/actions/produtActions';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';


const Searchbox = styled(Box)({
    background:'#fff',
    width:'38%',
    borderRadius:'2px',
    marginLeft:'13px',
    height:'36px',
    display:'flex'
  
    
})

const InputSearchBase = styled(InputBase)({
    padding:'5px 16px',
    width:'100%',
    fontSize:'14px'
})


const SearchIconwrapper = styled(Box)({
    color:'#2874f0',
    padding:'5px',
    display:'flex'
})

const ListWrapper = styled(List)({
  
  position:'absolute',
  backgroundColor:'#ffffff',
  color:'black',
  marginTop:'36px'
})

export default function SearchBar() {

  const [text,setText] = useState("")

  const {products} = useSelector(state => state.getProducts)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])

  const getText = (text)=>{
      setText(text);
  }

  return (
    <Searchbox>
      <InputSearchBase
        placeholder='Search for products, brands and more'
        onChange={(e)=> getText(e.target.value)}
        value={text}
      />
      <SearchIconwrapper>
        <SearchIcon/>
      </SearchIconwrapper>
      {
        text && 
          <ListWrapper>
              {
                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                    <ListItem>
                      <Link to={`/product/${product.id}`}
                        onClick={()=>setText('')}
                        style={{textDecoration:'none', color:'inherit'}}
                      >
                        {product.title.longTitle}
                      </Link>
                     </ListItem>

                )) 
              }
          </ListWrapper>
      }
    </Searchbox>
  )
}



