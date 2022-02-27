// import Box from '@mui/material/Box';


function ArticleGrid(data) {
  return data.data.response.docs.map((x) => 
      {
        // const thumbnailUrl = x?.multimedia.find(y => y.subtype==='thumbnail')?.url;
        return  (<div key={x.web_url + 'headline'}>
          <a href={x.web_url}>{x.headline.main}</a>
          {/* <Box
                  component="img"
                  sx={{
                    height: 155,
                    display: 'block',
                    maxWidth: 200,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={thumbnailUrl ? 'https://static01.nyt.com/' + thumbnailUrl : "" }
                  alt="test alt"
          /> */}
        </div>);
});
}

export default ArticleGrid;
