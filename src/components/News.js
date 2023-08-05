import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title=`NewsApp - ${this.capitalize(props.category)}`;
  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  }
  // const updatePage=async()=>{
  //   props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
  //   //fetch api is a promise
  //   //this.setState({ loading: true });
  //   setLoading(true)
  //   let data = await fetch(url);
  //   props.setProgress(45);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   props.setProgress(70);
  //   setArticles(parsedData.articles);
  //   setTotalResults(parsedData.totalResults);
  //   setLoading(false)
  //   props.setProgress(100);
  // }
  //it will execute after render() method executed

  //[] is the change on which the UseEffect executes
  useEffect(() => {
    document.title=`NewsApp - ${capitalize(props.category)}`;
    const updatePage=async()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        //fetch api is a promise
        //this.setState({ loading: true });
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(45);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
      };
        updatePage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  //   hendelNext = async () => {
  //     console.log("Next click");
  //     //Math.ceil( this.state.totalResults/10) - this will calculate the total number of pages
  //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
  //       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c4f5c00717d647f48656334acc6b52c2&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
  //     //  fetch api is a promise
  //       this.setState({loading:true});
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       this.setState({
  //         articles: parsedData.articles,
  //         page: this.state.page + 1,
  //         loading:false
  //       })
  //     //   console.log(this.state.page+1);
  //     //   console.log(this.state.totalResults/10);
  //     // this.setState({page:this.state.page+1});
  //     // console.log(this.state.page);
  //     // console.log(this.state.page+1);
  //     // this.updatePage();
  //   }
  //   }

  // hendelPrevious = async () => {
  //   console.log("Previous click");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c4f5c00717d647f48656334acc6b52c2&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
  //   //fetch api is a promise
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading:false
  //   })
  //   // this.setState({page:this.state.page-1});
  //   // this.updatePage();
  // }
  const fetchMoreData = async () => {
    //  this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    //fetch api is a promise
    // this.setState({loading:true});
    setLoading(true);
    console.log("in updatePage:-", page);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
    setLoading(false);
  };
  return (
    <>
      <h3 className='headlinedColor text-center' style={{marginTop:'90px'}}>Top Headlines</h3>
      {loading && <LoadingSpinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingSpinner/>}
      >

        <div className='container my-3' >
          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4 my-3' key={element.url}>
                <NewsItem title={element.title ? (element.title.length === 39 ? element.title : element.title.slice(0, 40)) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>

      {/* <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.hendelPrevious}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-outline-dark" onClick={this.hendelNext}>Next &rarr;</button>
      </div> */}
    </>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
