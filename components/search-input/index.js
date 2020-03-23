import React, { Component } from "react";
import { genericStrings } from "public/static/strings";
import { throttle, debounce } from "throttle-debounce";
import { _div, _Input, _Button } from "./_styled";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.searchDebounced = debounce(500, this.search);
    this.searchThrottled = throttle(500, this.search);
    this.state = { q: "" };
  }

  changeQuery = (event) => {
    this.setState({ q: event.target.value }, () => {
      // eslint-disable-next-line react/destructuring-assignment
      const timmedQuery = this.state.q.trim();
      if (timmedQuery.length > 0 && timmedQuery.length < 5) {
        this.searchThrottled(timmedQuery);
      } else {
        this.searchDebounced(timmedQuery);
      }
    });
  };

  search = (query) => {
    const { onReset, onInputUpdate } = this.props;
    const timmedQuery = query.trim();
    if (timmedQuery.length === 0) {
      onReset();
    } else {
      onInputUpdate(timmedQuery);
    }
  }

  keyPress = (event) => {
    if (event.keyCode !== 13) { return; }
    event.target.blur();
    const query = event.target.value.trim();
    const { onReset, onInputUpdate } = this.props;
    if (query.length === 0) {
      onReset();
    } else {
      onInputUpdate(query);
    }
  }

  reset = () => {
    const { onReset } = this.props;
    this.setState({ q: "" });
    onReset();
  }

  renderClearButton = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const trimmedQuery = this.state.q.trim();
    if (trimmedQuery) {
      return <_Button onClick={this.reset}>{genericStrings.clear}</_Button>;
    }
    return null;
  }

  render() {
    const { placeholder } = this.props;
    const { q } = this.state;

    return (
      <_div>
        <_Input
          placeholder={placeholder}
          value={q}
          onChange={this.changeQuery}
          onKeyDown={this.keyPress}
          aria-label={placeholder}
        />
        {this.renderClearButton()}
      </_div>
    );
  }
}

export default SearchInput;
