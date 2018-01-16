import React from 'react'
import './css.styl'
import Star from '../Star'
class DetailInfo extends React.Component {
  render() {
    var data = this.props.info
    console.log('data:', data)
    return (
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img
              style={{
                border: '1px dashed green',
                width: '100px',
                height: '100px'
              }}
            />
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star} />
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{__html: data.desc}} />
      </div>
    )
  }
}

export default DetailInfo
