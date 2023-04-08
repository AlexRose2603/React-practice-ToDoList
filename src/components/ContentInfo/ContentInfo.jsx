import { Component } from 'react';
import { getNews } from '../../services/fetch.js';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export class ContentInfo extends Component {
  state = {
    news: null,
    // isLoading: false,
    status: STATUS.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    const searchText = this.props.searchText.trim();
    if (prevProps.searchText !== searchText && searchText) {
      // this.setState({ isLoading: true });
      this.setState({ status: STATUS.PENDING });
      getNews(searchText)
        .then(data => {
          if (data.status === 'error') return Promise.reject(data.message);
          this.setState({ news: data.articles, status: STATUS.RESOLVED });
        })
        .catch(error => {
          this.setState({ error, status: STATUS.REJECTED });
        });
      // .finally(() => {
      //   this.setState({ isLoading: false });
      // });
    }
  }
  render() {
    const { news, status } = this.state;
    if (status === 'pending') return <h1>Loading...</h1>;
    else if (status === 'resolved')
      return (
        <ul>
          {news.map(el => (
            <li key={el.url}>{el.title}</li>
          ))}
        </ul>
      );
    else if (status === 'rejected') return console.log('error');
    // <>
    //   {/* {isLoading && <h1>Loading...</h1>} */}
    //   {news && (
    //     <ul>
    //       {news.map(el => (
    //         <li key={el.url}>{el.title}</li>
    //       ))}
    //     </ul>
    //   )}
    // </>
  }
}
