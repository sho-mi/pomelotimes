import Box from '@mui/material/Box';

function HomeGrid({data}) {

    function renderHomeArticles(data)
    {
        return data.results.map((x) => 
        <div key={x.short_url+'headline'}>
        <div>{x.title}</div>
        <Box
                component="img"
                sx={{
                  height: 155,
                  display: 'block',
                  maxWidth: 200,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={x?.multimedia != null ? x?.multimedia[0]?.url : ''}
                alt="test alt"
        />
        </div>);
    }
    return (
      <div className="HomeGrid">
          {renderHomeArticles(data)}
      </div>
    );
  }
  
  export default HomeGrid;