import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import Switch from '@mui/material/Switch';
import img1 from '../src/assets/drop.png'
import { useState } from "react";




import './App.css'
import { Card, CardContent, Container, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextareaAutosize,} from '@mui/material';
import { useTheme } from '@emotion/react';

function App() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  // content
  const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 96.3%;
    height:'1000px'
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 0px;

    &:hover {
      border-color: grey;
    }

    
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  //content tittle
  const [title, setTitle] = useState('')

  // content slug
  const[slug,setSlug]= useState('')

  // content
  const[content,setContent] = useState('')



  // content switch
  const [checked, setChecked] = React.useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // dropdown1
  const [age, setAge] = React.useState('');

  const handleChangeparent = (event) => {
    setAge(event.target.value);
  };


  // dropdown2
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    // fontWeight:
    //   personName.indexOf(name) === -1
    //     ? theme.typography.fontWeightRegular
    //     : theme.typography.fontWeightMedium,
  };
}

 
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleonChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    }

    // console.log('personName', personName)

    // upload btn
    const [image , setImage] = useState(true);
    const [videos , setVideos] = useState(false);
    const [file , setfile] = useState(false);

    const [featureImage, setFeatureImage] = useState(null)
    const [uploadImage, setuploadImage] = useState(null)
    const [uploadvideo, setuploadVideo] = useState(null)
    const [uploadfile, setuploadFile] = useState(null)


    // console.log('checked', checked)




    const handleTab=(event,name) =>{
      if(name ==='image'){
        setImage(true)
        setVideos(false)
        setfile(false)
      }else if(name ==='video'){
        setImage(false)
        setVideos(true)
        setfile(false)
      }else{
        setImage(false)
        setVideos(false)
        setfile(true)
      }
      
    }

    // console.log('feature image', featureImage)
    // console.log('_______uploadImage______--', uploadImage)
    // console.log('_____________--', uploadfile)

    // console.log('uploadvideo', uploadvideo)


    // console.log('title', title)
    // console.log('slug', slug)
    


    
    console.log('content', content)



  return (
    <>
    <section className='edit_page'>
      <Container>

      <Grid container spacing ={5}>
      <Grid  item lg={8}>
      <Card variant="outlined">
      <div className='card_1'>

      <Box sx={{ width: 800,maxWidth: '100%',}} >
        <div className="page_tittle">
        <TextField fullWidth label="Page Tittle" id="fullWidth" onChange={(e)=> setTitle(e.target.value)} value={title} />

        </div>
         <div className="page_slug">
         <TextField fullWidth label="Page Slug" id="full" onChange={(e)=> setSlug(e.target.value)} value={slug} />
         </div>
    </Box>
        <div className="content_text">
          <h5>content</h5>

        </div>
        <div className="content_box">
          <div className="content_editor">

          </div>
          <div className="content_textfil">
            <TextField   
              id="standard-multiline-static"
              label="content"
              multiline
              rows={7}
              defaultValue="Default Value"
              variant="standard"
              sx={{width:'100%',height:"70%"}}
              value={content}
              onChange={(e)=> setContent(e.target.value)}
          ></TextField>
          </div>

         <div className="context_f">

         </div>


       </div>
       <div className="upload_sec">
        <div className="upload_text">
          <h4>(Upload Media)</h4> 
        </div>
        <div className="upload_item">
        <div className="upload_btn_item">
              <Stack direction="row" spacing={2}>
            <Button variant="outlined" sx={{background:'#01ab55' ,color:'#000'}} onClick={(e)=>handleTab(e,'image')} disabled={image===true?true:false}> Images</Button>
            <Button variant="outlined" sx={{background:'#01ab55',color:'#000'}} onClick={(e)=>handleTab(e,'video')} disabled={videos===true?true:false}> Videos </Button>
            <Button variant="outlined" href="#contained-buttons"  sx={{background:'#01ab55',color:'#000'}} onClick={(e)=>handleTab(e,'file')} disabled={file===true?true:false}>  File </Button>
          </Stack>

          </div>
          <div className="btn_text">
            {image===true && <h5>Upload Images</h5>}
           {videos===true && <h5>Upload Videos</h5>}
           {file===true && <h5>Upload File</h5>}


          </div>
          <div className="upload_fil">
            <div className="upload_btn">
        { image===true &&  <Button component="label"  variant='outlined' sx={{ border: '1px solid #fafafa',color:'#1e1e1e' }} startIcon={<CloudUploadIcon />}>
              Click and Drag images to this area to upload
              <VisuallyHiddenInput type={'file'} accept='image/jpeg,image/gif,image/png,application/pdf,image/x-eps' onChange={(e)=> setuploadImage(e.target.files[0])}  />
              {/* <input type='file' accept='*'  onChange={(e)=> setFeatureImage(e.target.files[0])} ></input> */}
            </Button>}
            { videos===true &&  <Button component="label"  variant='outlined' sx={{ border: '1px solid #fafafa',color:'#1e1e1e' }} startIcon={<CloudUploadIcon />}>
              Click and Drag video to this area to upload
              <VisuallyHiddenInput type={'file'} accept='video/mp4,video/x-m4v,video/*' onChange={(e)=> setuploadVideo(e.target.files[0])}  />
              {/* <input type='file' accept='*'  onChange={(e)=> setFeatureImage(e.target.files[0])} ></input> */}
            </Button>}

            { file===true &&  <Button component="label"  variant='outlined' sx={{ border: '1px solid #fafafa',color:'#1e1e1e' }} startIcon={<CloudUploadIcon />}>
              Click and Drag file to this area to upload
              <VisuallyHiddenInput type={'file'} accept='application/pdf,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,  image/' onChange={(e)=> setuploadFile(e.target.files[0])}  />
              {/* <input type='file' accept='*'  onChange={(e)=> setFeatureImage(e.target.files[0])} ></input> */}
            </Button>}

            </div>
            <div className="upload_tittle">

            </div>
          </div>
        </div>
       </div>

    </div>
      </Card>
      
        

      </Grid>
      <Grid  item lg={4}>

      <Card>
        <div className="card_2">
          <div className="main_item">
            <div className="main_content">
              <h5>Publish</h5>
            </div>
            <div className="main_btn">
             <Switch checked={checked} onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color="success"/>
            </div>
          </div>
          <div className="dropdown_parent_page">

              <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Parent Page</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Parent Page"
              onChange={handleChangeparent}
            >
              <MenuItem value={10}>parent one</MenuItem>
              <MenuItem value={20}>parent Twenty</MenuItem>
              <MenuItem value={30}>parentThirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
                   
          </div>
          <div className="dropdown_position">
          <FormControl sx={{ m: 1, width: '94%', minWidth:120 }}>
        <InputLabel id="demo-multiple-name-label">Postion</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          label="Select Parent Page"
          onChange={handleonChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </div>
          <div className="feature_text">
            Feature Image
            </div>
          <div className="feature">
           
          {featureImage ===null ? 
            <div className="feature_drop">
              <div className="drop_logo">
                <img src={img1} alt="" />
              </div>
                <div className="drop_tittle">
                  <h2>Drop and Select <br />file</h2>
                  <p>drop file here or click<Button component="label"> browser <VisuallyHiddenInput type="file" onChange={(e)=> setFeatureImage(e.target.files[0])} /></Button>through your machine</p>
                </div>
            </div>
           :
              <div className="feature_drop">
              
                    <Box>
                      <img src={URL.createObjectURL(featureImage)} alt="" width={'60%'} height={'50%'} />
                      <Button variant='contained' onClick={(e)=> setFeatureImage(null)}>Cancel </Button>
                    </Box>
              </div>
            }
          </div>
        </div>
    </Card>
    <div className="card2_btn_grp">
      <div className="btn1_preview">
       <Button variant='outlined' sx={{color:'#000', border: '1px solid #000'}}> Preview </Button>
      </div>
      <div className="btn2_save">
      <Button variant='outlined'> Save </Button>
      </div>
      <div className="btn3_post">
        <Button variant='contained' sx={{background:'#01ab55'}}>Post</Button>
      </div>

    </div>
     </Grid>
    </Grid>
      </Container>
    
    </section>
    </>
  )
}

export default App;
