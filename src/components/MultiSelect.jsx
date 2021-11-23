import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StyledInputLabel } from './ContentForm';
import { useDispatch, useSelector,  } from 'react-redux';
import { addTag } from '../redux/moduels/contentTags';
import { Box, Chip, Typography } from '@mui/material';

const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelect({isUpdate,tags,savedTags}) {
  
  const dispatch = useDispatch();
  const theme = useTheme();
  const selectedTags = useSelector(state => state.contentTags);

  const handleChange = (e) => {
    if(e.target.value.length > 3 ){
        alert("tag는 3개까지 추가할 수 있습니다.")
        return;
    }
    const {
      target: { value },
    } = e;
    
    dispatch(addTag(value))
  };
  return (
    <>
      <hr className="content-form-divider"/>
      <StyledInputLabel sx={{margin:"40px auto",border:0,fontSize: "20px",}}>관련 태그를 선택해주세요</StyledInputLabel>
      <Typography variant="p" sx={{color:'#1976d2' ,fontSize:"12px" ,border:"1px solid #1976d2" ,padding:'4px' ,borderRadius:'15px'}}>선택된 태그</Typography>
      <Box sx={{height:'64px'}}>
        {selectedTags.map((tag,index)=>
            <Chip key={index} label={tag} size="small" color="success" sx={{margin:'20px 5px'}}/>
        )}
      </Box>
      <FormControl sx={{ width: '70%',fontSize:'10px' ,color:'bisque' }}>
        <Select
          sx={{  width: '100%',color:'bisque' , fontSize:'13px',border:'1px solid bisque',fontWeight:'bold'}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedTags}
          onChange={handleChange}
          input={<OutlinedInput label="Name" id ="tagsList" name="tagsList"/>}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => {
              return(
                <MenuItem
                sx={{fontWeight:'large'}} 
                key={tag.id}
                value={tag.tagName}
                style={getStyles(tag.tagName, selectedTags, theme)}
                >
                  {tag.tagName}
                </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  );
}