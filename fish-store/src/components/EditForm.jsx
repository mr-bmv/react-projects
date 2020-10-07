import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditForm extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string

  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget
    const updatedFish = { ...this.props.details, [name]: value }

    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    const { name, price, status, desc, image } = this.props.details
    return (
      <form className="fish-edit">
        <input name="name" type="text" value={name} onChange={this.handleChange} />
        <input name="price" type="text" value={price} onChange={this.handleChange} />
        <select name="status" onChange={this.handleChange}>
          <option value={status}>Fresh</option>
          <option value={status}>Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} value={desc} onChange={this.handleChange} />
        <input name="image" ref={this.imageRef} value={image} onChange={this.handleChange} />
        <button type="submit" onClick={() => this.props.deleteFish(this.props.index)}>Delete fish</button>
      </form>
    )
  }
}
