  import React from 'react';

  class Rating extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          let {rating, numberOfReviews} = this.props.rating;
          return <div className="rating">
                <span>
                    <i className={rating >= 1 ?'fa fa-star'
                        : rating >= 0.5 ? 'fa fa-star-half-o' 
                        : 'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 2 ?'fa fa-star'
                        : rating >= 1.5 ? 'fa fa-star-half-o' 
                        : 'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 3 ?'fa fa-star'
                        : rating >= 2.5 ? 'fa fa-star-half-o' 
                        : 'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 4 ?'fa fa-star'
                        : rating >= 3.5 ? 'fa fa-star-half-o' 
                        : 'fa fa-star-o'}></i>
                </span>
                <span>
                    <i className={rating >= 5 ?'fa fa-star'
                        : rating >= 4.5 ? 'fa fa-star-half-o' 
                        : 'fa fa-star-o'}></i>
                </span>
                <h2>{numberOfReviews} reviews</h2>
            </div>
      }
  }

  export default Rating;