import React, { Component } from 'react'

export default class EditForm extends Component {

  handleChange = (event) => {
    const { name, value } = event.currentTarget
    const updatedFish = { ...this.props.details, [name]: value }

    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    const { name, price, status, desc } = this.props.details
    return (
      <form className="fish-edit">
        <input name="name" type="text" value={name} onChange={this.handleChange} />
        <input name="price" type="text" value={price} onChange={this.handleChange} />
        <select name="status" onChange={this.handleChange}>
          <option value={status}>Fresh</option>
          <option value={status}>Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} value={desc} onChange={this.handleChange} />
        <input name="image" ref={this.imageRef} type="text" onChange={this.handleChange} />
      </form>
    )
  }
}
