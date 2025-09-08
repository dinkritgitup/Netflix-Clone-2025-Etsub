import React from 'react';
import Row from '../RowList/Row/Row'
import requests  from '../../../utils/requests';
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Upcoming Movies"} fetchUrl={requests.fetchUpcomingMovies} />
      <Row title={"K-Drama"} fetchUrl={requests.fetchKDrama} />
      <Row title={"C-Drama"} fetchUrl={requests.fetchCDrama} />
      <Row title={"Bollywood"} fetchUrl={requests.fetchBollywood} />
      <Row title={"Anime"} fetchUrl={requests.fetchAnime} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"TV Shows"} fetchUrl={requests.fetchTvShow} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList;
