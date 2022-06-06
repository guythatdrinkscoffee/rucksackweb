import {Typography} from "@mui/material";

const NotFoundPage = () => {
  return(
      <div style={{display:'block', padding:'10px'}}>
          <Typography variant={'h1'} align={'left'}>404</Typography>
          <Typography variant={'subtitle1'} align={'left'}>Oops! Page Not Found.</Typography>
      </div>
  )
}

export default NotFoundPage